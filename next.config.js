/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["images.metmuseum.org"],
  },
  swcMinify: true,
}

module.exports = nextConfig
