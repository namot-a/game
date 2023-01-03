import { createApp } from 'vue'
import App from './App.vue'
import Test from './test.vue'

import './assets/main.css'
import { Howl, Howler } from 'howler'

createApp(App).mount('#app')
createApp(Test).mount('#test')