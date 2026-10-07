import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ── Image Optimization ─────────────────── */
  images: {
    formats: ["image/avif", "image/webp", "image/jpeg"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  /* ── Next.js 16 Features ────────────────── */
  cacheComponents: true,
  partialPrefetching: true,

  /* ── Tailwind v4 via Turbopack ──────────── */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  /* ── Security ────────────────────────────── */
  headers: [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
  ],
};

export default nextConfig;
