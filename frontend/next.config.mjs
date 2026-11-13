/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  // Omit page validators to avoid unnecessary fingerprinting by scanners.
  generateEtags: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'; object-src 'none'; base-uri 'self'" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ]
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/metta",
        destination: "http://backend:5001/metta",
      },
      {
        source: "/api/metta_stateless",
        destination: "http://backend:5001/metta_stateless",
      }

    ]
  },
}

export default nextConfig
