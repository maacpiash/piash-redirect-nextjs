module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:ShortKey',
        destination: '/api/redirects/:ShortKey',
        permanent: true,
      },
      {
        source: '/gh/:repo',
        destination: 'https://github.com/maacpiash/:repo',
        permanent: true,
        basePath: false,
      },
    ]
  }
}
