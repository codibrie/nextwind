// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer({
  reactStrictMode: true,
  // output: 'standalone', # Enable for Docker Deployments
  images: {
    domains: ['upload.wikimedia.org'],
  },
})
