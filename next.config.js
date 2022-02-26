const withPWA = require('next-pwa')
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

  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    })
    return configuration
  },
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
    }
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
}

module.exports = {
  images: {
    domains: [CMS_IMG_HOSTNAME, 'picsum.photos'],
  },
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  ...withPWA(config),
}
