module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './scenes/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
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
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
  },
  plugins: [],
}
