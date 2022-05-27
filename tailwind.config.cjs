const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        'sans': ['Sharp Sans', ...defaultTheme.fontFamily.sans],
      }
    },
  },

  plugins: [],
};

module.exports = config;
