const PREVIEW_URL = process.env.VERCEL_URL

module.exports = [
  {
    name: 'Home',
    url: PREVIEW_URL + '',
    waitForTimeout: '8000'
  },
  {
    name: 'Platform',
    url: PREVIEW_URL + '/platform',
    waitForTimeout: '8000'
  },
  {
    name: 'Pricing',
    url: PREVIEW_URL + '/pricing',
    waitForTimeout: '8000'
  },
  {
    name: 'Search query',
    url: PREVIEW_URL + '/search?q=artificial+intelligence',
    waitForTimeout: '8000'
  }
]
