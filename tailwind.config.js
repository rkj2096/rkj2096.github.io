/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    '*.html',
    '_layouts/**/*.html',
    '_includes/**/*.html'
  ],
  theme: {
    fontFamily: {
      'fira': ['Fira Code'],
      'sans': ['Raleway'],
      'mulish': ["Mulish"]
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}


