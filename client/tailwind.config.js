/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#525FE1',
        'primary-200': '#FFCF59',
        'secondary-100': '#FF60A8',
        'secondary-300': '#A7CE4A'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
      lg: ['3rem', '1.3'],
    }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
}
