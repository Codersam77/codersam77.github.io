/*
 * Copyright 2024 Samuel Sanchez. 
 */



/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
    fontFamily: {
      "heading-h6-semibold": "Sora",
    },
    colors: {
      "primary-white": "#22d3ee", //not actually white (light blue)
      "primary-black": "#000", //black
      "primary-actuallywhite": "#f8fafc", //white
      darkslategray: "#333",
      "zinc-500": "#020617",//different type of black as the one above 
      "zinc-300": "#d4d4d8",//change
    },
    borderRadius: {
      "lg-8": "18.8px",
      "3xs": "10px",
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "9xl": "28px",
      "3xl": "22px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "5xl": "24px",
      inherit: "inherit",
    },
    extend: {
      spacing: {},
    },
  },
};

/*
 * Copyright 2024 Samuel Sanchez. 
 */