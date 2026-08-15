-- Run this once in Supabase Dashboard > SQL Editor.
-- This deliberately permits anonymous readers and writers for this small private-use site.

create table if not exists public.wedding_plan (
  id text primary key check (id = 'lewis-megan-2026'),
  plan jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.wedding_plan enable row level security;

grant select, insert, update on public.wedding_plan to anon;

drop policy if exists "Wedding plan is readable" on public.wedding_plan;
create policy "Wedding plan is readable"
  on public.wedding_plan for select to anon
  using (id = 'lewis-megan-2026');

drop policy if exists "Wedding plan can be created" on public.wedding_plan;
create policy "Wedding plan can be created"
  on public.wedding_plan for insert to anon
  with check (id = 'lewis-megan-2026');

drop policy if exists "Wedding plan can be updated" on public.wedding_plan;
create policy "Wedding plan can be updated"
  on public.wedding_plan for update to anon
  using (id = 'lewis-megan-2026')
  with check (id = 'lewis-megan-2026');
