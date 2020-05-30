import { createApp } from 'vue'

import vWeUI from '@/index'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(vWeUI)
app.use(router)
app.mount('#app')

// router.isReady().then(() => app.mount('#app'))
