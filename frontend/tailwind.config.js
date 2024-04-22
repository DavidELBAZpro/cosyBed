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
      },
      keyframes: {
        'scale-up-bl': {
          '0%': {
            transform: 'scale(0.5)',
            transformOrigin: 'bottom left'
          },
          '100%': {
            transform: 'scale(1)',
            transformOrigin: 'bottom left'
          }
        }
      },
      animation: {
        'scale-up-bl': 'scale-up-bl 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

