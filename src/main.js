// import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import { ViteSSG } from 'vite-ssg'
import routes from 'virtual:generated-pages'

export const createApp = ViteSSG(App, { routes })
