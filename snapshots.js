const PREVIEW_URL = process.env.VERCEL_URL

console.log(process.env)

module.exports = [
  {
    name: 'Home',
    url: PREVIEW_URL + ''
  },
  {
    name: 'Platform',
    url: PREVIEW_URL + '/platform'
  },
  {
    name: 'Pricing',
    url: PREVIEW_URL + '/pricing'
  },
  {
    name: 'Search query',
    url: PREVIEW_URL + '/search?q=artificial+intelligence',
    waitForTimeout: 8000
  }
]
