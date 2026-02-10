# Deploy check

Run this before deploying to catch build failures early:

```bash
npm run deploy-check
```

This runs `next build` (same as production build). If it exits with code 0, the project should build successfully on your host (Vercel, Netlify, etc.).

## Notes

- **TypeScript**: The project has `ignoreBuildErrors: true` in `next.config.mjs`, so TypeScript errors do not fail the build. To enforce type checking, set it to `false` and fix any reported errors.
- **Lockfiles**: If you see a warning about multiple lockfiles, use a single package manager (e.g. only `package-lock.json` with npm, or only `pnpm-lock.yaml` with pnpm). The config sets `turbopack.root` to this project directory to reduce that warning.
- **Images**: Remote images are allowed from `images.unsplash.com` and `via.placeholder.com`. Other domains must be added to `images.remotePatterns` in `next.config.mjs`.
- **Static export**: If you need a fully static export (e.g. GitHub Pages), you would add `output: 'export'` to `next.config.mjs`; the current setup is for a Node/server deploy.
