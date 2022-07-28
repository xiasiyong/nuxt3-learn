/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}'
  ],
  theme: {
    extend: {
      colors: {
        bbb: {
          100: '#f00',
          200: '#f12'
        }
      }
    }
  },
  plugins: []
}
