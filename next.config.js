module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:ShortKey',
        destination: '/api/redirects/:ShortKey',
        permanent: true,
      }
    ]
  }
}
