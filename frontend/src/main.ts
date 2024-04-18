import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueQueryPlugin)
app.use(router as any)
app.use(Toast, {
  transition: 'Vue-Toastification__fade',
  maxToasts: 2,
  newestOnTop: true,
})
app.mount('#app')
