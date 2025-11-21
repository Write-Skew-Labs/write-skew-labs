// astro.config.mjs
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  integrations: [vue()],
  output: 'static',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)), // 👈 this is the key line
      },
    },
  },
})
