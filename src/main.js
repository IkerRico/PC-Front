import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { VueSpinnersPlugin } from 'vue3-spinners'

import MainLoader from './components/MainLoader.vue'
import TablaComponente from './components/TablaComponente.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSpinnersPlugin)

app.component('MainLoader', MainLoader)
app.component('TablaComponente', TablaComponente)

app.mount('#app')
