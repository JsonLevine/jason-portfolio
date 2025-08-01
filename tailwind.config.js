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
        'stronghold-red': '#E64747',
        'stronghold-red-accessible': '#F84D4D',
        'stronghold-eerie-black': '#191919',
        'stronghold-onyx': '#404040',
        'stronghold-platinum': '#E4E4E4',
        'stronghold-jet': '#343434',
        'stronghold-white': '#FFFFFF',
        'stronghold-green': '#4ADE80',
        'chewy-blue': '#3B82F6',
        'chewy-blue-accessible': '#99C0FF',
        'optum-orange': '#F97316',
        'optum-orange-accessible': '#F99550',
        'link-blue': '#8F99FF',
        'link-dark-blue': '#5D6AFD',
        'main-text': '#9CA3AF',
        'ymca-purple': '#BD9DFA',
        'taskrabbit-green': '#6BD878',
        'vuori-blue': '#4EEFD9',
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
