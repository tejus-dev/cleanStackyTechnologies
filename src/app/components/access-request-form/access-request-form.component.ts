import { Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { supabase } from '../../../lib/supabase';

type RequestStatus = 'pending' | 'approved' | 'rejected' | null;

@Component({
  selector: 'app-access-request-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './access-request-form.component.html',
  styleUrl: './access-request-form.component.scss',
})
export class AccessRequestFormComponent {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly loading = signal(false);
  protected readonly message = signal('');
  protected readonly messageType = signal<'info' | 'error' | 'success'>('info');

  protected readonly form = {
    fullName: '',
    email: '',
    password: '',
    company: '',
    reason: '',
  };

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      void this.prefillFromSession();
    }
  }

  private async prefillFromSession(): Promise<void> {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) {
        return;
      }

      this.form.email = session.user.email ?? '';
      await this.checkExistingRequest(session.user.id);
    } catch {
      this.message.set('Could not load your session. You can still submit manually.');
      this.messageType.set('error');
    }
  }

  private async checkExistingRequest(userId: string): Promise<RequestStatus> {
    const { data, error } = await supabase
      .from('access_requests')
      .select('status')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(1);

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    const status = data?.[0]?.status as RequestStatus | undefined;

    if (status === 'approved') {
      this.message.set('Your access is approved. Redirecting to demo...');
      this.messageType.set('success');
      await this.router.navigateByUrl('/demo');
      return 'approved';
    }

    if (status === 'pending') {
      this.message.set('Your request is under review. We will notify you after approval.');
      this.messageType.set('info');
      return 'pending';
    }

    if (status === 'rejected') {
      this.message.set('Your previous request was not approved. Contact support for review.');
      this.messageType.set('error');
      return 'rejected';
    }

    return null;
  }

  protected async submit(): Promise<void> {
    this.loading.set(true);
    this.message.set('');

    try {
      if (!this.form.fullName.trim() || !this.form.email.trim() || !this.form.reason.trim()) {
        this.message.set('Please complete Full Name, Email, and Reason.');
        this.messageType.set('error');
        return;
      }

      const {
        data: { session: currentSession },
      } = await supabase.auth.getSession();

      let userId = currentSession?.user?.id ?? '';

      if (!userId) {
        if (!this.form.password.trim() || this.form.password.length < 8) {
          this.message.set('Set a password with at least 8 characters to create your account.');
          this.messageType.set('error');
          return;
        }

        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
          email: this.form.email.trim(),
          password: this.form.password,
        });

        if (signUpError) {
          throw signUpError;
        }

        if (!signUpData.session) {
          this.message.set(
            'Please check your email to confirm your account, then come back to log in.',
          );
          this.messageType.set('info');
          return;
        }

        userId = signUpData.user?.id ?? '';
      }

      if (!userId) {
        this.message.set('Unable to identify your user account. Please log in and try again.');
        this.messageType.set('error');
        return;
      }

      const existing = await this.checkExistingRequest(userId);
      if (existing === 'pending' || existing === 'rejected') {
        return;
      }

      const { error: insertError } = await supabase.from('access_requests').insert({
        user_id: userId,
        email: this.form.email.trim(),
        full_name: this.form.fullName.trim(),
        company: this.form.company.trim() || null,
        reason: this.form.reason.trim(),
        status: 'pending',
      });

      if (insertError) {
        throw insertError;
      }

      this.message.set("Thanks! We'll review your request and get back to you.");
      this.messageType.set('success');
      this.form.password = '';
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unexpected error';
      this.message.set(`Could not submit request: ${errorMessage}`);
      this.messageType.set('error');
    } finally {
      this.loading.set(false);
    }
  }
}
