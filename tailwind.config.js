module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FFB700",
          secondary: "#0000",
          accent: "#red",
          neutral: "#FFB700",
          "base-100": "#ffffff",
          info: "#98A8DD",
          error: "#FA5C5C",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
};
