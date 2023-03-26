import 'src/css/reset.css'
import 'src/css/style.css'
import 'src/css/style.sass'

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { router } from 'src/router'

const app = createApp(App)

app.use(router())

app.mount('#app')
