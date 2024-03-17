import { defineConfig } from "@pandacss/dev";

export default defineConfig({

  // The name of your css system
  presets: ['@shadow-panda/preset'],

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/components/**/*.{js,jsx,ts,tsx}", "./src/app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  jsxFramework:'react',

  // The output directory for your css system
  outdir: "styled-system",
});
