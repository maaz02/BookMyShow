//tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        maaz:
{
  50: '#fdfce0',
  100: '#f5f3b9',
  200: '#eeeb90',
  300: '#e7e265',
  400: '#e0da3b',
  500: '#c6c122',
  600: '#9a9618',
  700: '#6e6b0f',
  800: '#424005',
  900: '#171500',
},

navCol:
{
  50: '#efeffd',
  100: '#d0d3e4',
  200: '#b2b5cd',
  300: '#9397b8',
  400: '#757aa3',
  500: '#5b6089',
  600: '#464b6b',
  700: '#2B3148',
  800: '#1d2030',
  900: '#070b16',
}

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
