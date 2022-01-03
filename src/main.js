import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/main.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueEasyLightbox from 'vue-easy-lightbox'
import VCalendar from 'v-calendar'

createApp(App).use(store).use(router).use(VueEasyLightbox).use(VCalendar, {}).mount('#app')
