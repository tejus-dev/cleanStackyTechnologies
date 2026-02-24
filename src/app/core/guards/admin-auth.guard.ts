import { PLATFORM_ID, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';
import { supabase } from '../../../lib/supabase';

export const adminAuthGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if (!isPlatformBrowser(platformId)) {
    return router.createUrlTree(['/login']);
  }

  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const userEmail = session?.user?.email?.toLowerCase().trim() ?? '';
    const allowedEmails = (environment.adminEmails ?? []).map((email) => email.toLowerCase().trim());

    if (!session || !userEmail || !allowedEmails.includes(userEmail)) {
      return router.createUrlTree(['/login']);
    }

    return true;
  } catch {
    return router.createUrlTree(['/login']);
  }
};
