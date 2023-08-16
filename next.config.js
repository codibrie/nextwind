// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer({
  reactStrictMode: true,
  experimental: { serverActions: true },
  output: 'standalone',
  images: {
    domains: ['upload.wikimedia.org'],
  },
})
