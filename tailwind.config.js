/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: "75em",
      xxl: "93.75em",
    },

    extend: {
      colors: {
        brandingBlue: {
          400: "rgb(0, 101, 163)",
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
        },
      },
    },
  },
  plugins: [],
};
