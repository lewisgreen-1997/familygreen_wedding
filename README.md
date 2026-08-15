# Lewis & Megan — Wedding Day Operations

A private, static wedding-day operations portal. It includes an editable master timeline, people run-sheets, workstream and location views, decorations, contacts, and planning resources.

## Run locally

From this folder:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Then open `http://localhost:8080`.

## Deploy with GitHub Pages

1. Create an empty GitHub repository.
2. Add it as the `origin` remote and push the `main` branch.
3. In GitHub, open **Settings → Pages** and deploy from `main` / `/ (root)`.
4. For a custom domain, add the domain in GitHub Pages settings and configure its DNS with your domain provider. GitHub will create the required `CNAME` file when the domain is saved, or one can be committed here later.

The site is entirely static: it has no authentication or server-side runtime. Timeline edits are stored in the browser’s local storage, so they are specific to the browser/device used to edit them.

The shared Supabase record is the live source of truth. The browser keeps a local copy only as an offline fallback.

## Shared live plan data

The site is configured to use Supabase for a shared editable plan. Run [`supabase/schema.sql`](supabase/schema.sql) once in the Supabase SQL Editor, then the site loads and saves the shared plan directly.

This configuration intentionally allows anonymous editing, appropriate only for a small trusted group. The repository contains the publishable key only; never add a Supabase secret key to this project.
