module.exports = {
  content: [
    './data/**/*.md',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwindcss-rtl')]
}
