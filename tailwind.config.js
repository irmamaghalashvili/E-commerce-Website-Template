/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      padding: {
        'pm': '16px',
        'pl': '100px'
      }
    },
  },
  plugins: [],
}

