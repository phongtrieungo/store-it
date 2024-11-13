/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          '100': '#EA6365',
          DEFAULT: '#FA7275'
        },
        red: '#FF7474',
        error: '#b80000',
        green: '#3DD9B3',
        blue: '#56B8FF',
        pink: '#EEA8FD',
        orange: '#F9AB72',
        light: {
          '100': '#333F4E',
          '200': '#A3B2C7',
          '300': '#F2F5F9',
          '400': '#F2F4F8'
        },
        dark: {
          '100': '#04050C',
          '200': '#131524'
        },
      },
    },
  },
  plugins: [],
}

