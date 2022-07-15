const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ['Quattrocento Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Quattrocento', ...defaultTheme.fontFamily.serif]
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwindcss-rtl')]
}
