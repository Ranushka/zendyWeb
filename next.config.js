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

  // compiler: {
  //   removeConsole: true
  // },

  async rewrites() {
    return [
      {
        source: '/publisher/:first',
        destination: '/search?publisher=:first'
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
  ...withPWA(config)
}

module.exports = withBundleAnalyzer(toExport)
