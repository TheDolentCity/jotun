const starlightPlugin = require('@astrojs/starlight-tailwind');
const typographyPlugin = require('@tailwindcss/typography');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: colors.amber,
        gray: colors.gray,
      },
      fontFamily: {
        sans: 'Space Grotesk Variable, sans-serif',
        serif: 'Space Grotesk Variable, serif',
        mono: 'Space Mono, mono',
      },
    },
  },
  plugins: [starlightPlugin(), typographyPlugin()],
};
