import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { VueSpinnersPlugin } from 'vue3-spinners'

import MainLoader from './components/MainLoader.vue'
import TablaComponente from './components/TablaComponente.vue'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSpinnersPlugin)
app.use(VueSweetalert2)

app.component('MainLoader', MainLoader)
app.component('TablaComponente', TablaComponente)

app.mount('#app')
