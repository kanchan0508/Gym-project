module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease-in-out",
        "fade-in-delayed": "fadeIn 2s ease-in-out",
        "zoom-in": "zoomIn 0.8s ease-out",
      },
    },
  },
  plugins: [],
};
