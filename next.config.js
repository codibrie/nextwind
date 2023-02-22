module.exports = {
  reactStrictMode: true,
  experimental: { appDir: false }, // It stills buggy, we need to wait for the next release.
  output: 'standalone',
  images: {
    domains: ['upload.wikimedia.org'],
  },
}
