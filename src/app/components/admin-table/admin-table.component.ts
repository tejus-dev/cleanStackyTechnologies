import { Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { supabase } from '../../../lib/supabase';
import { isPlatformBrowser } from '@angular/common';

type AccessRequestRow = {
  id: string;
  full_name: string;
  email: string;
  company: string | null;
  reason: string | null;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
};

@Component({
  selector: 'app-admin-table',
  standalone: true,
  templateUrl: './admin-table.component.html',
  styleUrl: './admin-table.component.scss',
})
export class AdminTableComponent {
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly loading = signal(false);
  protected readonly message = signal('');
  protected readonly rows = signal<AccessRequestRow[]>([]);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      void this.load();
    }
  }

  protected async load(): Promise<void> {
    this.loading.set(true);
    this.message.set('');

    try {
      const { data, error } = await supabase
        .from('access_requests')
        .select('id,full_name,email,company,reason,status,created_at')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      this.rows.set((data ?? []) as AccessRequestRow[]);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unexpected error';
      this.message.set(`Could not load requests: ${errorMessage}`);
    } finally {
      this.loading.set(false);
    }
  }

  protected async updateStatus(id: string, status: 'approved' | 'rejected'): Promise<void> {
    this.loading.set(true);
    this.message.set('');

    try {
      const { data, error } = await supabase
        .from('access_requests')
        .update({ status })
        .eq('id', id)
        .select('id,status');

      if (error) {
        throw error;
      }

      if (!data || data.length === 0) {
        throw new Error(
          'No rows were updated. Check RLS policy for UPDATE on access_requests.',
        );
      }

      this.rows.update((current) => current.map((row) => (row.id === id ? { ...row, status } : row)));
      this.message.set(`Request ${status} successfully.`);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unexpected error';
      this.message.set(`Could not update status: ${errorMessage}`);
    } finally {
      this.loading.set(false);
    }
  }
}
