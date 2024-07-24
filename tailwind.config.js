/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cust-black': '#23252A',
        'cust-white': '#F5F4EF',
        'cust-gray': '#383838',
        'cust-gray-lighter': '#A6A6A6',
        'cust-blue': '#0EB6CC',
        'cust-blue-ligther': '#4BCED6',
      }
    },
  },
  plugins: [],
}

