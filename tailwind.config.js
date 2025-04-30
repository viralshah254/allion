/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'oda-blue': '#082F49',
        'oda-indigo': '#1E3A8A',
        'seasalt': '#F8FAFC',
        'airforce-blue': '#568EA3',
        'auburn': '#A62639',
      },
      fontFamily: {
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700,
      }
    },

  },
  plugins: [],
}

