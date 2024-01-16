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
      {
        source: '/resume',
        destination: 'https://github.com/maacpiash/static/releases/latest/download/ahad-resume-2024.pdf',
        permanent: true,
        basePath: false,
      },
    ]
  }
}
