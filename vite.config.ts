import { resolve } from 'path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [
    solidPlugin()
  ],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  build: {
    target: 'esnext'
  }
})
