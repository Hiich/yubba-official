const colors = require("tailwindcss/colors")
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css,scss}'
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
        primary: {
          light: '#eb5ea5',
          DEFAULT: '#e74094',
          dark: '#BD2371',
        },
        secondary: {
          light: '#594c52',
          DEFAULT: '#473c41',
          dark: '#352c30',
        },
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        title: ['Roboto Bold', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'rainbow': "url('/bg-rainbow.png')",
        'rainbow-lines': "url('/bg-rainbow-lines.png')",
        'underwater': "url('/bg-underwater.png')",
        'underwater-mobile': "url('/bg-underwater-mobile.png')",
        'bubble': "url('/bg-bubbles.png')",
        'bubble-mobile' : "url('/image-pinkbubble-mobile.png')",
        'cloud' : "url('/bg-cloud.png')",
        'cloud-mobile' : "url('/bg-cloud-mobile.png')",
      },
      animation: {
        'yubba-floating': 'yubba-floating 5s infinite'
      },
      keyframes: {
        'yubba-floating': {
          "0%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(0px, 27px)" },
          "100%": { transform: "translate(0px, 0px)" }
        }
      }
    },
  },
  variants: {
    extend: {
      display: ['group-focus'],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
