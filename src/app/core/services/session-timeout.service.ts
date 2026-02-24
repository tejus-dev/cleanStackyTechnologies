import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, NgZone, PLATFORM_ID, inject } from '@angular/core';
import { Router } from '@angular/router';
import { supabase } from '../../../lib/supabase';

@Injectable({ providedIn: 'root' })
export class SessionTimeoutService {
  // Auto logout after 10 minutes of inactivity.
  private readonly idleLimitMs = 10 * 60 * 1000;

  private readonly router = inject(Router);
  private readonly zone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  private initialized = false;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;
  private listening = false;

  private readonly resetHandler = () => {
    void this.resetTimerIfAuthenticated();
  };

  init(): void {
    if (this.initialized || !isPlatformBrowser(this.platformId)) {
      return;
    }

    this.initialized = true;

    void this.resetTimerIfAuthenticated();

    // React to auth state transitions.
    supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        void this.resetTimerIfAuthenticated();
        return;
      }

      if (event === 'SIGNED_OUT') {
        this.clearTimer();
      }
    });
  }

  private async resetTimerIfAuthenticated(): Promise<void> {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      this.clearTimer();
      return;
    }

    this.attachListeners();
    this.startTimer();
  }

  private startTimer(): void {
    this.clearTimerOnly();

    this.zone.runOutsideAngular(() => {
      this.timeoutId = setTimeout(() => {
        void this.zone.run(async () => {
          await this.handleTimeout();
        });
      }, this.idleLimitMs);
    });
  }

  private async handleTimeout(): Promise<void> {
    this.clearTimerOnly();

    try {
      await supabase.auth.signOut();
    } finally {
      await this.router.navigateByUrl('/login');
    }
  }

  private attachListeners(): void {
    if (this.listening) {
      return;
    }

    this.listening = true;

    const target = this.document.defaultView;
    if (!target) {
      return;
    }

    const events: Array<keyof WindowEventMap> = [
      'click',
      'mousemove',
      'keydown',
      'scroll',
      'touchstart',
    ];

    for (const event of events) {
      target.addEventListener(event, this.resetHandler, { passive: true });
    }
  }

  private clearTimer(): void {
    this.clearTimerOnly();
  }

  private clearTimerOnly(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
}
