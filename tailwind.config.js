module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'begum': ['begum', 'serif']
      },
      fontSize: {
        normal: ['1.3rem', '20px'],
        h1: ['3.5rem', ''],
      },
      colors: {
        pryColor: {
          light: '#A6DFF8',
          DEFAULT: '#27AAE1',
          dark: '#08A0DF',
        },
        secColor: {
          DEFAULT: '#090C10',
        }
      },
      boxShadow: {
        before: '0 4px 6px -1px rgba(0, 0, 0, .4), 0 2px 4px -1px rgba(0, 0, 0, .4)',
        now: '0 4px 6px -1px rgba(0, 0, 0, .7), 0 2px 4px -1px rgba(0, 0, 0, .4)',
      },
      margin: {
        '100': '30rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
