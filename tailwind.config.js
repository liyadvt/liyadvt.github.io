module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#FFCCCC',
        secondary: '#C9B6E4',
        dark: '#637A9F',
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        'serif': ['"Libre Baskerville"', 'serif'],
       }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
