/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'xxl': '1440px' // Ajouter un breakpoint personnalisé 'xxl'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

