import './assets/main.css'
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App) // createApp() returns an application instance

app.use(router)

app.mount('#app') 
