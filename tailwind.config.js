module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c2e4f7",
        secondary: "#3d17b7",
        bl :  "#111"
      },
      backgroundImage: {
        'hero-pattern': "url('assets/img/jiu-jitsu-.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
         padding: {
        '100px': '100px',
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      },
      backgroundSize: {
          '30 ': '30px',
      }
    },
  },
  plugins: [],
};
