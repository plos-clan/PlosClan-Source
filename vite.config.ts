import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [
    solidPlugin(),
    ViteMinifyPlugin()
  ],
  build: {
    target: 'esnext'
  },
  esbuild: {
    drop: ['console', 'debugger']
  }
})
