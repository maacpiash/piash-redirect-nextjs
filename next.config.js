module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:shortcut',
        destination: '/api/redirects/:shortcut',
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
