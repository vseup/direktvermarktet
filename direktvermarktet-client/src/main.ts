import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
