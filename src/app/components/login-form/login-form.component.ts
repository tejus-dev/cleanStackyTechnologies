import { Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { supabase } from '../../../lib/supabase';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly loading = signal(false);
  protected readonly message = signal('');

  protected readonly form = {
    email: '',
    password: '',
  };
  private readonly draftStorageKey = 'pendingAccessRequestDraft';

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      void this.redirectIfAlreadyApproved();
    }
  }

  private async redirectIfAlreadyApproved(): Promise<void> {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) {
        return;
      }

      const status = await this.fetchStatus(session.user.id, session.user.email ?? '');
      if (status === 'approved') {
        await this.router.navigateByUrl('/demo');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unexpected error';
      this.message.set(`Could not check your access status: ${errorMessage}`);
    }
  }

  private async fetchStatus(userId: string, email: string): Promise<string | null> {
    const { data, error } = await supabase
      .from('access_requests')
      .select('id,status')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(1);

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    if (data?.[0]?.status) {
      return data[0].status;
    }

    const { data: byEmail, error: byEmailError } = await supabase
      .from('access_requests')
      .select('id,status')
      .eq('email', email)
      .order('created_at', { ascending: false })
      .limit(1);

    if (byEmailError && byEmailError.code !== 'PGRST116') {
      throw byEmailError;
    }

    const row = byEmail?.[0];
    if (!row) {
      return null;
    }

    const { error: bindError } = await supabase
      .from('access_requests')
      .update({ user_id: userId })
      .eq('id', row.id);

    if (bindError) {
      throw bindError;
    }

    return row.status;
  }

  private async tryCreateRequestFromDraft(userId: string, email: string): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const raw = localStorage.getItem(this.draftStorageKey);
    if (!raw) {
      return;
    }

    let draft: { email?: string; fullName?: string; company?: string; reason?: string } | null = null;
    try {
      draft = JSON.parse(raw) as { email?: string; fullName?: string; company?: string; reason?: string };
    } catch {
      localStorage.removeItem(this.draftStorageKey);
      return;
    }

    const draftEmail = (draft?.email ?? '').toLowerCase().trim();
    const loginEmail = email.toLowerCase().trim();
    if (!draft || draftEmail !== loginEmail) {
      return;
    }

    if (!draft.fullName?.trim() || !draft.reason?.trim()) {
      localStorage.removeItem(this.draftStorageKey);
      return;
    }

    const { error } = await supabase.from('access_requests').insert({
      user_id: userId,
      email: loginEmail,
      full_name: draft.fullName.trim(),
      company: draft.company?.trim() || null,
      reason: draft.reason.trim(),
      status: 'pending',
    });

    if (!error) {
      localStorage.removeItem(this.draftStorageKey);
      return;
    }

    if (error.code === '23505') {
      // Duplicate row race; clear draft and continue.
      localStorage.removeItem(this.draftStorageKey);
      return;
    }

    throw error;
  }

  protected async submit(): Promise<void> {
    this.loading.set(true);
    this.message.set('');

    try {
      if (!this.form.email.trim() || !this.form.password.trim()) {
        this.message.set('Please enter your email and password.');
        return;
      }

      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: this.form.email.trim(),
        password: this.form.password,
      });

      if (authError) {
        throw authError;
      }

      const userId = authData.user?.id;
      if (!userId) {
        this.message.set('Could not validate your account. Please try again.');
        return;
      }

      const userEmail = (authData.user?.email ?? this.form.email).toLowerCase().trim();
      const adminEmails = (environment.adminEmails ?? []).map((email) => email.toLowerCase().trim());
      if (adminEmails.includes(userEmail)) {
        await this.router.navigateByUrl('/admin');
        return;
      }

      let status = await this.fetchStatus(userId, authData.user?.email ?? this.form.email.trim());
      if (!status) {
        await this.tryCreateRequestFromDraft(userId, userEmail);
        status = await this.fetchStatus(userId, authData.user?.email ?? this.form.email.trim());
      }

      if (status === 'approved') {
        await this.router.navigateByUrl('/demo');
        return;
      }

      if (status === 'pending') {
        this.message.set('Your request is under review.');
        return;
      }

      if (status === 'rejected') {
        this.message.set('Your request was not approved. Contact us.');
        return;
      }

      await this.router.navigateByUrl('/request-access');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unexpected error';
      this.message.set(`Login failed: ${errorMessage}`);
    } finally {
      this.loading.set(false);
    }
  }
}
