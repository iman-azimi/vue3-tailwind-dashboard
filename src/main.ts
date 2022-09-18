import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import aosMixin from './mixins/aos.js'
import Toast from 'vue-toastification'

import './assets/main.css'
import './index.css'

const app = createApp(App)
app.mixin(aosMixin)
app.use(createPinia())
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

const options = {
  showCloseButtonOnHover: true,
  position: 'top-center',
}

app.use(Toast, options)
const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
})
app.use(router)
app.mount('#app')
