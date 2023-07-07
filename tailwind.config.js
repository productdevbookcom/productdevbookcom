/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        woodsmoke: {
          50: '#f6f6f7',
          100: '#e3e3e4',
          200: '#c6c6c9',
          300: '#a1a2a7',
          400: '#7d7e84',
          500: '#636469',
          600: '#4e4f53',
          700: '#414144',
          800: '#363639',
          900: '#2f3032',
          950: '#101011',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
