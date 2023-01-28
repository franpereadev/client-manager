/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}",
    "./src/features/**/*.{html,js,tsx}",
    "./src/features/dashboard/**/*.{html,js,tsx}",
    "./src/features/dashboard/clients/*.{html,js,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        "sidebar": {
          900: '#2F2B54',
          800: '#3F3B66',
          700: '#4F4B78',
          600: '#5F5A89',
          500: '#6F6A9B',
          400: '#7F7AAD',
          300: '#8F8ABF',
          200: '#9F99D0',
          100: '#AFA9E2',
        },
        "sidebar-text": '#F5F5F7',
        "primary-button": "#545FFF",
        "main-body": "#C7CACE"
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
