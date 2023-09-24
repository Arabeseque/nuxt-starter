/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  /**
   * @docs https://blog.logrocket.com/how-to-use-custom-fonts-tailwind-css/
   */
  theme: {
    extend: {
      fontSize: {
        title: `2.6rem;`,
        paragraph: `1.2rem;`
      },
      colors: {
        'primary': {
          500: '#764abc;',
        },

      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'caveat': ['Caveat', 'cursive'],
    }
  },
  plugins: [],
}