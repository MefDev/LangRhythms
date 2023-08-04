/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#525FE1',
        'primary-200': '#FFCF59',
        'secondary-100': '#FF60A8',
        'secondary-200': '#F66742',
        'secondary-300': '#A7CE4A',
        'secondary-400': '#9848FF',
        'secondary-500': '#AD9F93',
        'gray-1': '#333333',
        'gray-2': '#4F4F4F',
        'gray-3': '#828282',
        'black-3': '#282828',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        header: ['3rem', '1.3'],
      },
    screens: {
      xs: '389px',
      xxs: '351px'
    }
    },
  },
  plugins: [],
  variants: {},
}
