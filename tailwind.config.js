/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#e64747',
        'custom-gray': '#454545'
      },
      boxShadow: {
        'project-shadow': '10px 10px 0 0 rgba(230, 71, 71, 0.5)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

