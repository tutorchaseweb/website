module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/epq',
        destination: '/a-level/epq',
        permanent: true,
      },
      {
        source: '/extended-essay',
        destination: '/ib/extended-essay',
        permanent: true,
      },
      {
        source: '/tok',
        destination: '/ib/tok',
        permanent: true,
      },
    ]
  },
}
