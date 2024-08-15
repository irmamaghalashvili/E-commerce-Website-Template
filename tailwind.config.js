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
      },
      colors: {
        'clothGray': 'rgba(242, 240, 241, 1)',
        'clothP': 'rgba(0, 0, 0, 0.6)',
        'clothbtn': 'rgba(0, 0, 0, 1)'

      }
    },
  },
  plugins: [],
}

