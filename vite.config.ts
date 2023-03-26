import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      types: resolve(__dirname, './types'),
      app: resolve(__dirname, '.'),
      src: resolve(__dirname, './src'),
    }
  },
  define: {
    'process.env': {},
    global: {},
  },
})
