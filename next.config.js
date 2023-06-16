/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  generateBuildId: () => String(Date.now()),
  
}

module.exports = nextConfig