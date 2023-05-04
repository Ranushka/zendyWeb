const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const CMS_IMG_HOSTNAME = new URL(process.env.NEXT_PUBLIC_CMS_BASE_URL).hostname

const config = {
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap
    }
  },
  pwa: {
    publicExcludes: ['!img/*'],
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
  }
}

const toExport = {
  compiler: {
    // removeConsole: true
  },
  images: {
    domains: [
      CMS_IMG_HOSTNAME,
      'picsum.photos',
      'storage.googleapis.com',
      'via.placeholder.com'
    ]
  },
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en'
  },
  async rewrites() {
    return [
      {
        source: '/publisher/:publisher',
        destination: '/search?q=publisher%3A :publisher'
      },
      {
        source: '/subject/:subject',
        destination: `/search?q=subject%3A :subject`
      },
      {
        source: '/material/:material',
        destination: `/search?q=material%3A :material`
      }
    ]
  },
  // reactStrictMode: true,
  // swcMinify: true,
  ...withPWA(config)
}

module.exports = withBundleAnalyzer(toExport)
