/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{html,js,ts}",
  ],

  theme: {
    colors: {
      // blue: "#1fb6ff",
      // purple: "#7e5bef",
      // pink: "#ff49db",
      // orange: "#ff7849",
      // green: "#13ce66",
      // yellow: "#ffc82c",
      // "gray-dark": "#273444",
      // gray: "#8492a6",
      // "gray-light": "#d3dce6",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0166FF",
          secondary: "#E5E7EB",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          red: "#FF0000",
        },
      },
    ],
  },
};
