/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "default",
    domains: ["localhost"],
    path: ''
  },
  assetPrefix: './',
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  test: /\.(mp3)$/,
  use: {
    loader: 'file-loader',
    options: {
      publicPath: '/_next/static/uploads/',
      outputPath: 'static/uploads/',
      name: '[name].[ext]',
      esModule: false,
    },
  },
}

module.exports = nextConfig
