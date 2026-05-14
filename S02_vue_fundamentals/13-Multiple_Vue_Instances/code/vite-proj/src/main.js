import { createApp } from 'vue'
import App from './App.vue'
import App1 from './App1.vue'

const app1 = createApp(App).mount('#app1')

const app2 = createApp(App1).mount('#app2')
