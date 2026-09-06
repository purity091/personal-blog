# Decap CMS setup

The site now stores content in GitHub-backed Astro Content Collections:

- Blog posts: `src/content/blog/*.md`
- Projects: `src/content/projects/*.md`
- Uploaded media: `public/uploads/`

The editor lives in the standalone `cms/` directory and is not part of the Astro website build.
Deploy that directory separately, for example at `cms.lahlah.ai` or a dedicated Netlify site.

## Authentication

The repository is configured for the GitHub backend and the `main` branch. Decap needs an OAuth provider before publishing is enabled in production.

### Recommended path for the current Vercel deployment

1. Create a GitHub OAuth App.
2. Use an OAuth proxy that supports Decap's `/auth` and `/callback` endpoints.
3. Set the proxy URL as `backend.base_url` and its auth path as `backend.auth_endpoint` in `cms/config.yml`.
4. Keep the GitHub client secret only in the proxy provider's environment variables.

### Simpler alternative

If the site is deployed on Netlify, enable Netlify Identity and Git Gateway, then change the backend to:

```yaml
backend:
  name: git-gateway
  branch: main
```

Do not add GitHub tokens or OAuth client secrets to this repository.

## Publishing flow

1. Open the standalone CMS URL and sign in.
2. Create or edit a post or project.
3. Publish through the editorial workflow.
4. Decap commits the change to GitHub.
5. Vercel builds the Astro site from the new commit.

Sanity is no longer used by the build. Existing local Markdown articles were kept during the migration.
