import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Pages(),
    Layouts(),
    Components({
      extensions: ['vue', 'md', 'tsx', 'jsx'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
