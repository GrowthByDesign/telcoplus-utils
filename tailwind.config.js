/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "75em",
        xxl: "93.75em",
        xxxl: "1920px",
      },
      colors: {
        brandingBlue: {
          400: "rgb(0, 101, 163)",
          500: "rgb(0, 79, 128)",
        },
        auxBlue: {
          100: "rgb(242, 245, 247)",
          600: "rgb(61, 86, 102)",
          700: "rgb(31, 48, 58)",
          800: "rgb(0, 25, 40)",
        },
        tertBlue: {
          100: "rgb(0, 53, 87)",
        },
        brandingGreen: {
          400: "rgb(115, 168, 0)",
        },
        brandingGrey: {
          700: "rgb(64, 64, 64)",
          900: "rgb(2, 16, 23)",
        },
      },
    },
  },
  plugins: [],
};
