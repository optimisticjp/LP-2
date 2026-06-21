/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Fonts are loaded via a <link> tag in app/layout.tsx. We disable Next's
  // build-time font inlining so the build never needs to reach Google Fonts.
  // The font CSS is fetched by the browser at runtime as usual.
  optimizeFonts: false,
  // Build a fully static site into ./out so it can be served by any static
  // host (Cloudflare Pages, Netlify, S3, etc.) with no Node server.
  output: 'export',
  // Static export can't run on-demand image optimization, so images are served
  // as-is. Cloudflare's CDN handles caching; optional Image Resizing can be
  // layered on later if needed.
  images: {
    unoptimized: true,
  },
  // Emit /about/index.html instead of /about.html so clean URLs work on
  // static hosts without extra redirect rules.
  trailingSlash: true,
};

export default nextConfig;
