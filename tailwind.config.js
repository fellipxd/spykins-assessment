module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        max: "max-content",
        half: "60vh",
        foot: "45vh",
      },
      colors: {
        mantis: {
          DEFAULT: "#f3f6f4",
          50: "#bd3e3e",
          100: "#ea5555",
          150: "#540e96",
          200: "#b20202",
          250: "#940000",
          300: "#efecec"
        },
      },

      position: {
        top: {
          half: "55%"
        }
      }
    },
  },
  plugins: [],
}
