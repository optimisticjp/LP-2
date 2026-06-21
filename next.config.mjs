/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Fonts are loaded via a <link> tag in app/layout.tsx. We disable Next's
  // build-time font inlining so the build never needs to reach Google Fonts.
  // The font CSS is fetched by the browser at runtime as usual.
  optimizeFonts: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
