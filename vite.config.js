import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'
import Components from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    include: [/\.vue$/, /\.md$/],
  }), WindiCSS(),
  Pages({
    extensions: ['vue', 'md'],
  }),
  Markdown({
    headEnabled: true,
  }),
  Components({
    customLoaderMatcher: path => path.endsWith('.md'),
  })
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },

})
