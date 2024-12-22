/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0c3665',
          light: '#164b8a',
          dark: '#092847'
        },
        accent: {
          DEFAULT: '#bd9e5d',
          light: '#d4b87c',
          dark: '#96803f'
        }
      },
    },
  },
  plugins: [],
}