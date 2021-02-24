import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.scss'
import scrollAnimation from './directives/scrollAnimation'

createApp(App).use(router)
.directive('scrollanimation', scrollAnimation)
.mount('#app')
