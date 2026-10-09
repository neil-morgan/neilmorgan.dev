This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Content previews

In development, the preview toggle is always visible, even before draft mode is
enabled. Turn on **Preview mode** to load draft and unpublished Contentful
content. The first click enables Next.js draft mode for your browser; turn the
toggle off to return to published content.

CMS preview requests use `CONTENTFUL_PREVIEW_TOKEN` and bypass the fetch cache.
Configure this token alongside `CONTENTFUL_SPACE_ID` and
`CONTENTFUL_DELIVERY_TOKEN`. `CONTENTFUL_PREVIEW_ENABLED` is not used; preview
selection comes from the browser's preview setting or an explicit per-fetch
`preview` option.

Contentful can also open a preview through
`/api/draft?secret=<CONTENTFUL_PREVIEW_SECRET>&slug=<page-slug>`. The endpoint
validates the secret, enables draft mode and preview, and redirects to the page.
Use `/api/disable-draft` to exit Next.js draft mode and clear the `nm_preview`
cookie. The preview toggle is hidden in
production.

Static route generation discovers published pages only (`preview: false`).
Unpublished pages do not need static generation: `dynamicParams = true` allows
their URLs to render on demand when preview is enabled.

## Git Hooks

Run `pnpm install` to install dependencies and configure Husky automatically.
Git hooks run `pnpm lint` before each commit, validate the commit message with
Commitlint, and run `pnpm test` before each push. Failed checks block the operation.

Commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/):
`type(optional-scope): description`. For example:

```text
feat: new component
fix: broken url
feat(ui): add navigation component
```

Supported types are `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`,
`refactor`, `revert`, `style`, and `test`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
