/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: { center: true },
    colors: {
      blue: {
        100: '#112240',
        200: '#0a192f',
      },
      green: '#64ffda',
      white: '#ffffff',
      gray: {
        100: '#ccd6f6',
        200: '#8892b0',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
