const starlightPlugin = require('@astrojs/starlight-tailwind');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Your preferred accent color. Indigo is closest to Starlight’s defaults.
        accent: colors.blue,
        // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
        gray: colors.zinc,
      },
      fontFamily: {
        sans: 'Space Grotesk Variable, sans-serif',
        serif: 'Space Grotesk Variable, serif',
        mono: 'Space Mono, mono',
      },
    },
  },
  plugins: [starlightPlugin()],
};
