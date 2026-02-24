import { Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { DemoContentComponent } from '../../components/demo-content/demo-content.component';
import { supabase } from '../../../lib/supabase';

@Component({
  selector: 'app-protected-demo-page',
  standalone: true,
  imports: [DemoContentComponent],
  templateUrl: './protected-demo.page.html',
  styleUrl: './protected-demo.page.scss',
})
export class ProtectedDemoPage {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly loading = signal(true);
  protected readonly message = signal('');
  protected readonly approved = signal(false);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      void this.validateAccess();
    }
  }

  private async validateAccess(): Promise<void> {
    this.loading.set(true);

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) {
        await this.router.navigateByUrl('/login');
        return;
      }

      const { data, error } = await supabase
        .from('access_requests')
        .select('status')
        .eq('user_id', session.user.id)
        .eq('status', 'approved')
        .limit(1);

      if (error) {
        throw error;
      }

      if (!data?.length) {
        await this.router.navigateByUrl('/login');
        return;
      }

      this.approved.set(true);
      await this.router.navigateByUrl('/demo/clinic');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unexpected error';
      this.message.set(`Could not verify access: ${errorMessage}`);
      await this.router.navigateByUrl('/login');
    } finally {
      this.loading.set(false);
    }
  }
}
