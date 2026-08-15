-- Wedding operations: normalised shared data store.
-- Run this once in Supabase SQL Editor. It snapshots the existing wedding_plan
-- row first, then copies that exact snapshot into individually addressable rows.

create table if not exists public.wedding_plan_backups (
  id bigint generated always as identity primary key,
  wedding_id text not null,
  plan jsonb not null,
  backed_up_at timestamptz not null default now(),
  reason text not null default 'normalised-schema-migration'
);

-- This is deliberately before every other migration action. It is an append-only
-- recovery point for the plan as it exists when this script is run.
insert into public.wedding_plan_backups (wedding_id, plan)
select id, plan from public.wedding_plan;

create table if not exists public.wedding_metadata (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.wedding_periods (
  id text primary key,
  wedding_id text not null references public.wedding_metadata(id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.wedding_entities (
  id text primary key,
  wedding_id text not null references public.wedding_metadata(id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.wedding_events (
  id text primary key,
  wedding_id text not null references public.wedding_metadata(id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.wedding_event_details (
  id text primary key,
  wedding_id text not null references public.wedding_metadata(id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.wedding_relationships (
  id text primary key,
  wedding_id text not null references public.wedding_metadata(id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.wedding_decoration_items (
  id text primary key,
  wedding_id text not null references public.wedding_metadata(id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.wedding_metadata enable row level security;
alter table public.wedding_periods enable row level security;
alter table public.wedding_entities enable row level security;
alter table public.wedding_events enable row level security;
alter table public.wedding_event_details enable row level security;
alter table public.wedding_relationships enable row level security;
alter table public.wedding_decoration_items enable row level security;

do $$
declare table_name text;
begin
  foreach table_name in array array['wedding_metadata','wedding_periods','wedding_entities','wedding_events','wedding_event_details','wedding_relationships','wedding_decoration_items']
  loop
    execute format('drop policy if exists "Wedding shared read" on public.%I', table_name);
    execute format('drop policy if exists "Wedding shared write" on public.%I', table_name);
    execute format('create policy "Wedding shared read" on public.%I for select using (true)', table_name);
    execute format('create policy "Wedding shared write" on public.%I for all using (true) with check (true)', table_name);
  end loop;
end $$;

-- One-time migration from the old single JSON document. Safe to run again.
insert into public.wedding_metadata (id, data)
select id, coalesce(plan->'wedding', '{}'::jsonb) from public.wedding_plan
on conflict (id) do nothing;

insert into public.wedding_periods (id, wedding_id, data)
select item->>'id', source.id, item
from public.wedding_plan source cross join lateral jsonb_array_elements(coalesce(source.plan->'periods','[]'::jsonb)) item
on conflict (id) do nothing;

insert into public.wedding_entities (id, wedding_id, data)
select item->>'id', source.id, item
from public.wedding_plan source cross join lateral jsonb_array_elements(coalesce(source.plan->'entities','[]'::jsonb)) item
on conflict (id) do nothing;

insert into public.wedding_events (id, wedding_id, data)
select item->>'id', source.id, item
from public.wedding_plan source cross join lateral jsonb_array_elements(coalesce(source.plan->'events','[]'::jsonb)) item
on conflict (id) do nothing;

insert into public.wedding_event_details (id, wedding_id, data)
select item->>'id', source.id, item
from public.wedding_plan source cross join lateral jsonb_array_elements(coalesce(source.plan->'eventDetails','[]'::jsonb)) item
on conflict (id) do nothing;

insert into public.wedding_relationships (id, wedding_id, data)
select md5(coalesce(item->>'detailId','') || '|' || coalesce(item->>'entityId','') || '|' || coalesce(item->>'role','')), source.id, item
from public.wedding_plan source cross join lateral jsonb_array_elements(coalesce(source.plan->'relationships','[]'::jsonb)) item
on conflict (id) do nothing;

insert into public.wedding_decoration_items (id, wedding_id, data)
select item->>'id', source.id, item
from public.wedding_plan source cross join lateral jsonb_array_elements(coalesce(source.plan->'decorationItems','[]'::jsonb)) item
on conflict (id) do nothing;

-- Make the new tables available to the Supabase REST API immediately.
notify pgrst, 'reload schema';
