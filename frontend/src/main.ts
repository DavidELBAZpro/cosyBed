import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import Notifications from '@kyvg/vue3-notification'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueQueryPlugin)
app.use(router as any)
app.use(Notifications)

app.mount('#app')
