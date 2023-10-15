import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [
    solidPlugin()
  ],
  build: {
    target: 'esnext'
  },
  esbuild: {
    drop: ['console', 'debugger']
  }
})
