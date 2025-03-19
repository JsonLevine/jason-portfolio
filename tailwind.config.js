/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn:{
          '0%':{opacity: '0'},
          '100%':{opacity: '1'}
        }
      },
      colors: {
        'stronghold-red': '#E11A19',
        'stronghold-imperial-red': '#E64747',
        'stronghold-eerie-black': '#191919',
        'stronghold-onyx': '#404040',
        'stronghold-platinum': '#E4E4E4',
        'stronghold-jet': '#343434',
      },
      boxShadow: {
        'project-shadow': '10px 10px 0 0 rgba(230, 71, 71, 0.5)',
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in',
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

