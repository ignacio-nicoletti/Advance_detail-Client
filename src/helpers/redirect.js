
module.exports = {
  async redirects(destino) {
    return [
      {
        source: '/draft/:slug*',
        destination: destino,
        permanent: true,
      },
    ]
  },
}