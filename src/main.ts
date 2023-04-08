import 'src/css/style.sass'
import 'src/css/reset.scss'

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { router } from 'src/router'

const app = createApp(App)

app.use(router())

app.mount('#app')
