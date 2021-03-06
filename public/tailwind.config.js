module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
      Lobster: ['Lobster', 'cursive'],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
