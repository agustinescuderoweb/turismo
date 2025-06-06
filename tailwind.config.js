// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // si usas la carpeta app
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      },
      colors: {
        navy: '#001f3f',
      },
    },
  },
  plugins: [],
}
