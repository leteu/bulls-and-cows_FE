import { Quasar, Dialog, Notify } from 'quasar'

import 'quasar/src/css/index.sass'
import 'animate.css'
import 'src/css/style.scss'
import 'src/css/reset.scss'
import 'src/css/animation.scss'

import { createApp } from 'vue'
import App from './App.vue'

import { router } from 'src/router'
import { store } from 'src/store'

const app = createApp(App)

app.use(router())
app.use(store())
app.use(Quasar, {
  plugins: {
    Dialog,
    Notify,
  },
})

app.mount('#app')
