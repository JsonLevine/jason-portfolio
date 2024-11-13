/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'stronghold-red': '#E11A19',
        'stronghold-imperial-red': '#E64747',
        'stronghold-eerie-black': '#191919',
        'stronghold-space-cadet': '#2F2F41',
        'stronghold-platinum': '#E4E4E4',
        'stronghold-gunmetal': '#1F2937',
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

