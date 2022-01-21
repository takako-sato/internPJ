const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ["./src/components/**/**.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trasparent: "transparent",
        current: "currentColor",
        purple: {
          650: "#944af1",
        },
        pink: {
          55: "#F9EDED",
        },
        blue: {
          150: "#55A9C3",
          220: "#D2E8EA",
          500: "#9FCCD0",
        },
        red: {
          220: "#E8CBCB",
        },
        purple: {
          main: "#d1c0e7",
          secoundary: "#944AF1",
        },
        gray: {
          main: "#505050",
          secoundary: "#757575",
          submain: "#939393",
        },
      },
      padding: {
        sm: "10px",
        md: "16px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["label-checked"],
      borderColor: ["label-checked"],
      borderWidth: ["label-checked"],
      padding: ["label-checked"],
    },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant("label-checked", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const eClassName = e(`label-checked${separator}${className}`); // escape class
          const yourSelector = 'input[type="checkbox"]'; // your input selector. Could be any
          return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
        });
      });
    }),
  ],
};
