/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "Cross-Origin-Opener-Policy",
          value: "same-origin",
        },
        {
          key: "Content-Security-Policy",
          value:
            "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://vitals.vercel-insights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self' https://vitals.vercel-insights.com; object-src 'none'; base-uri 'self'; frame-ancestors 'none';",
        },
      ],
    },
  ],
};

export default nextConfig;
