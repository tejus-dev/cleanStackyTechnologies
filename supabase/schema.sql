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

-- Admin policies: lock to explicit admin email.
-- Update this email when changing admin account.
drop policy if exists "Admin can read all access requests" on access_requests;
create policy "Admin can read all access requests"
  on access_requests for select
  to authenticated
  using (
    (auth.uid() = user_id) OR
    ((auth.jwt() ->> 'email') = 'mtejus29@gmail.com')
  );

drop policy if exists "Admin can update access requests" on access_requests;
create policy "Admin can update access requests"
  on access_requests for update
  to authenticated
  using ((auth.jwt() ->> 'email') = 'mtejus29@gmail.com')
  with check ((auth.jwt() ->> 'email') = 'mtejus29@gmail.com');

-- =========================================================
-- Auto-delete auth users after 10 days (forces fresh signup)
-- =========================================================
create extension if not exists pg_cron;

create or replace function purge_expired_auth_users()
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  -- Keep admin account persistent; purge all other users older than 10 days.
  delete from auth.users
  where created_at < now() - interval '10 days'
    and lower(email) <> 'mtejus29@gmail.com';
end;
$$;

-- Run daily at 03:30 UTC
-- If you rerun this file, safely replace schedule.
do $$
begin
  if exists (select 1 from cron.job where jobname = 'purge-expired-auth-users-daily') then
    perform cron.unschedule('purge-expired-auth-users-daily');
  end if;
exception
  when undefined_table then
    -- cron.job may not exist if pg_cron isn't available on this project.
    null;
end $$;

select cron.schedule(
  'purge-expired-auth-users-daily',
  '30 3 * * *',
  $$select purge_expired_auth_users();$$
);
