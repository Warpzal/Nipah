import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BaseSpinner from '@/components/UI/BaseSpinner.vue'

const app = createApp(App)
app.use(store)
app.use(router)

app.component('base-spinner', BaseSpinner)

app.mount('#app')