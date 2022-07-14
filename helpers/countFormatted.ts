export default function countFormatted(totalResults) {
  return new Intl.NumberFormat('en-GB', {
    notation: 'compact',
    compactDisplay: 'short'
  }).format(totalResults)
}
