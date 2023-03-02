/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "off-white": "var(--off-white)",
        "very-dark-blue": "var(--very-dark-blue)",
        "grayish-blue": "var(--grayish-blue)",
        "dark-grayish-blue": "var(--dark-grayish-blue)",
        "soft-orange": "var(--soft-orange)",
        "soft-red": "var(--soft-red)"
      }
    },
  },
  plugins: [],
}
