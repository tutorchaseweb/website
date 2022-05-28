module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './scenes/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '425px',
        sm: '640px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1450px',
        hd: '1650px',
        fhd: '2100px',
      },
    },
  },
  plugins: [],
}
