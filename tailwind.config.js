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
      margin: {
        'mm': '16px',
        'ml': '100px'
      },
      colors: {
        'clothGray': 'rgba(242, 240, 241, 1)',
        'clothP': 'rgba(0, 0, 0, 0.6)',
        'clothbtn': 'rgba(0, 0, 0, 1)',
        'priceclr': 'rgba(0, 0, 0, 0.4)',
        'saleClr': 'rgba(255, 51, 51, 0.1)'

      },
      fontFamily: {
        'integralCF': ['IntegralCF'],
        'satoshi': ['satoshi']
      },
      fontWeight: {
        'h2': 'bold'
      },
      textTransform: {
        'h2': 'uppercase'
      }
    },
  },
  plugins: [],
}

