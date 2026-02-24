/*
 Copy `.env.example` to `.env` and fill in your Supabase project URL and anon key.
 Found at: https://app.supabase.com → your project → Settings → API
*/
import { createClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

const supabaseUrl = environment.supabaseUrl;
const supabaseAnonKey = environment.supabaseAnonKey;

const hasPlaceholderConfig =
  supabaseUrl.includes('YOUR_PROJECT_ID') || supabaseAnonKey.includes('YOUR_SUPABASE_ANON_KEY');

if (hasPlaceholderConfig) {
  console.warn(
    'Supabase credentials are placeholders. Update src/environments/environment*.ts with real values.',
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Use a stable key and custom lock to avoid LockManager acquisition failures in some browsers/tabs.
    storageKey: 'sb-cleanstacky-auth-token',
    lock: async (_name, _timeout, fn) => fn(),
  },
});
