/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Fonts load via a <link> tag in app/layout.tsx, so the build never reaches
  // out to Google Fonts. The browser fetches the font CSS at runtime as usual.
  optimizeFonts: false,
  // Build a fully static site into ./out so any static host (Cloudflare Pages,
  // Netlify, S3) can serve it with no Node server.
  output: 'export',
  // Images are plain <img> tags pointing at the school's existing media URLs,
  // so Next image optimization is turned off. See IMAGE_ASSETS_NEEDED.md for
  // how to self-host them later.
  images: {
    unoptimized: true,
  },
  // Emit /about/index.html instead of /about.html so clean URLs work without
  // extra redirect rules on static hosts.
  trailingSlash: true,
};

export default nextConfig;
