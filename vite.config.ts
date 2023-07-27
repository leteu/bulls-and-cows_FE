import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: 'src/css/quasar-variables.sass',
    }),
  ],
  resolve: {
    alias: {
      types: resolve(__dirname, './types'),
      app: resolve(__dirname, '.'),
      src: resolve(__dirname, './src'),
    },
  },
  define: {
    'process.env': {},
    global: {},
  },
  build: {
    outDir: './dist',
  },
})
