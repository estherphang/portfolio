/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto Slab", "serif"],
    },
    extend: {
      colors: {
        yellow: "#F5C151",
        green: "#D1E48B",
        pink: "#FFDBEC",
        purple: "#D1DEF3",
        blue: "#A2E0FA",
        white: "#FFFFFF",
        black: "#212427",
        grey: "#E4E4E4",
      },
      fontSize: {
        base: ["1rem", { lineHeight: "1.625" }],
        "2xl": ["1.5rem", { lineHeight: "2.25rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.5rem" }],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F5C151",
          secondary: "#A2E0FA",
          accent: "#FFDBEC",
          neutral: "#212427",
          "base-100": "#FFFFFF",
          info: "#08609B",
          success: "#D1E48B",
          warning: "#BF1D68",
          error: "#D60036",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
