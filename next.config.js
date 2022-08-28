const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const CMS_IMG_HOSTNAME = new URL(process.env.NEXT_PUBLIC_CMS_BASE_URL).hostname

const config = {
  // async redirects() {
  //   return [
  //     {
  //       source: '/library',
  //       destination: '/library/collections',
  //       permanent: true,
  //     },
  //   ]
  // },

  // compilerOptions: {
  //   baseUrl: '.'
  // },

  compiler: {
    // removeConsole: true
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
        source: '/journal/:journal',
        destination: `/search?q=journal%3A :journal`
      }
    ]
  },

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
  // reactStrictMode: true,
  // swcMinify: true,
  ...withPWA(config)
}

module.exports = withBundleAnalyzer(toExport)
