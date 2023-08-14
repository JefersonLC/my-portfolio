import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  experimental: {
    viewTransitions: true,
  },
  compressHTML: true,
  site: 'https://jeferson-portfolio.vercel.app/',
})
