const path = require('path')
const withPWA = require('next-pwa')

const redirects = {
  async redirects() {
    return [
      {
        source: '/library',
        destination: '/library/collections',
        permanent: true,
      },
    ]
  },
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

// module.exports = withPWA(redirects)

module.exports = {
  // experimental: { optimizeCss: true },
  // sassOptions: {
  //   cssModules: true,
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  ...withPWA(redirects),
}
