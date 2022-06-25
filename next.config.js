/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['secure-media.hotstarext.com', 'image.tmdb.org'],
  },
}

module.exports = nextConfig
