-- Users table is handled by Supabase Auth automatically

-- Access requests table
create table if not exists access_requests (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  email text not null,
  full_name text not null,
  company text,
  reason text,
  status text default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Keep updated_at current on updates
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_access_requests_updated_at on access_requests;
create trigger trg_access_requests_updated_at
before update on access_requests
for each row
execute function set_updated_at();

-- Only allow users to read their own request
alter table access_requests enable row level security;

drop policy if exists "Users can view own request" on access_requests;
create policy "Users can view own request"
  on access_requests for select
  using (auth.uid() = user_id);

drop policy if exists "Users can insert own request" on access_requests;
create policy "Users can insert own request"
  on access_requests for insert
  with check (auth.uid() = user_id);

-- Temporary admin policies for frontend-only moderation UI.
-- IMPORTANT: Remove these and secure admin access before production.
drop policy if exists "TEMP admin read all requests" on access_requests;
create policy "TEMP admin read all requests"
  on access_requests for select
  using (true);

drop policy if exists "TEMP admin update status" on access_requests;
create policy "TEMP admin update status"
  on access_requests for update
  using (true)
  with check (true);
