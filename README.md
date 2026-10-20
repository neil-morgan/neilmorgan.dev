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

## Incremental static regeneration

`fetchContent` caches published Contentful responses with a default
`revalidate` interval of 60 seconds. Static pages using these requests inherit
the interval; if a page has multiple intervals, the shortest applies.
Override it per request when needed:

```tsx
await fetchContent({ document: BlogListingContentDocument, revalidate: 300 });
```

Intervals are in seconds. `revalidate: 0` disables caching for that request;
`revalidate: false` caches indefinitely unless explicitly invalidated. Cache
tags remain supported. Preview requests always use `cache: "no-store"` and
omit revalidation options, regardless of the supplied interval.

Verify ISR in production mode with `pnpm build` and `pnpm start`, not
`pnpm dev`. The build's route table should show `Revalidate 1m` for the home
page and generated CMS pages. After publishing a Contentful change and letting
the interval expire, request the page to trigger background regeneration.
That request may receive stale content; a subsequent request after regeneration
completes should receive the update. Regeneration is request-driven, not a
scheduled refresh. Draft-mode responses bypass ISR.

## Image focal points

`AspectImage` accepts the raw CMS `focalPoint` JSON, for example
`{ focalPoint: { x: 2721, y: 992 } }`, together with `sourceSize` containing the
original asset's width and height. It validates and normalizes pixel coordinates
internally; callers do not need to convert them. Using these dimensions and the crop's
`ratio`, it centers the focal point on each cropped axis, clamping at the image
edges to avoid empty space. An axis with no overflow cannot be shifted without
exposing empty space, so it stays centered. For `fit="contain"`, focal points
retain percentage alignment. Without a focal point, the browser's centered
position is unchanged.

Blog listings, the latest-post card, and page headers pass the CMS focal point
directly and use the original asset's `width` and `height` selected in GraphQL
for `sourceSize`, not the rendered or optimized dimensions.
Missing focal points are optional; malformed points, invalid dimensions, or
coordinates outside the asset bounds raise an explicit error.

## Rich-text images

Contentful rich-text fields support embedded `Image` entries (with their nested
image asset and optional focal point) as well as directly embedded image assets.
Both render through `AspectImage`, including in live preview. They shrink to fit
the text container with a maximum width of 50rem (`scale="down"`) and use a
landscape golden-ratio frame (approximately 1.618:1) with centered `cover`
cropping. Alt text uses the asset description, falling back to its title.
Non-image assets are unchanged; other embedded entries use the existing component
registry.

## Loading skeletons

`Skeleton` is a reusable decorative placeholder with the same one-second linear
gradient shimmer as `AspectImage`. Set its dimensions through `style` or
`className`; its default size is full width and 1rem tall. Both respect
`prefers-reduced-motion`.

```tsx
import { Skeleton } from "@/app/_components";

<Skeleton style={{ height: "18rem", borderRadius: "0.5rem" }} />;
```

`MasonryGrid` renders staggered skeleton blocks in its initial HTML while its
client-side layout loads and measures the responsive columns. Placeholders match
the number of children, configured breakpoints and gutter. The real layout stays
hidden and non-interactive until mounted; the skeleton is then removed without a
fixed loading delay. The existing masonry placement algorithm is unchanged.
Placeholder heights are estimates, so this reduces the empty loading flash but
does not guarantee zero layout shift for arbitrary content.

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
