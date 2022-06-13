const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        'sans': ['Sharp Sans', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '3xl': '1792px',
        '4xl': '2048px',
      }
    },
  },

  plugins: [],
};

module.exports = config;
