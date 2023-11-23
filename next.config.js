/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        pathname: "**",
      }
    ],
  },
}

module.exports = nextConfig
