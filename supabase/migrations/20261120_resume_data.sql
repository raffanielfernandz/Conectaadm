-- Persist professional resume data on the authenticated user's profile.
alter table public.profiles
add column if not exists resume_data jsonb not null default '{}'::jsonb;

-- Existing profile RLS policies should permit users to update their own row.
