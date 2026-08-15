-- Run this once in Supabase Dashboard > SQL Editor.
-- Public read access is intentional for a small, trusted wedding-planning group.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'wedding-decor',
  'wedding-decor',
  true,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do update
set public = true,
    file_size_limit = 10485760,
    allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

drop policy if exists "Wedding decor can be uploaded" on storage.objects;
create policy "Wedding decor can be uploaded"
  on storage.objects for insert to anon
  with check (bucket_id = 'wedding-decor');
