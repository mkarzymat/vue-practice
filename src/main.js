import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Notifications)

app.mount('#app')