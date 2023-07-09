/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

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
        royalblue: {
          50: '#eef3ff',
          100: '#e1e8fe',
          200: '#c8d5fd',
          300: '#a7b8fa',
          400: '#8392f6',
          500: '#656def',
          600: '#5754e4',
          700: '#403bc7',
          800: '#3532a1',
          900: '#2f2f80',
          950: '#1d1c4a',
        },
        codgray: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#313131',
          950: '#1c1c1c',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['fa-brands', 'ic']),
    }),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          'maxWidth': '92%',
          '@screen sm': {
            maxWidth: '632px',
          },
          '@screen md': {
            maxWidth: '900px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1240px',
          },
        },
      })
    },
  ],
}
