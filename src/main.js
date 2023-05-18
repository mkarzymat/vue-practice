import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')





















// import { lenguages } from './i18n'
// import { defaultLocale } from './i18n'
// import  {createI18n } from 'vue-i18n'
// import  {useI18n } from 'vue-i18n'

// const massages = Object.assign(lenguages)

// const i18n = createI18n({
//     legacy: false,
//     locale: defaultLocale,
//     fallbacklocale: 'en',
//     massages
// })
