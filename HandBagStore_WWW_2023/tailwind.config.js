const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './src/main/resources/templates/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily:{
        'bepro': ['BeProBase', ...defaultTheme.fontFamily.sans],
        'medium': ['BeProMedium', ...defaultTheme.fontFamily.sans],
        'bold': ['BeProBold', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}