import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

import TheHeader from './components/nav/TheHeader.vue'
import TheFooter from './components/nav/TheFooter.vue'
import AlertModal from './components/ui/AlertModal.vue'
import BaseModal from './components/ui/BaseModal.vue'
import LoaddingSpinner from './components/ui/LoadingSpinner.vue'

const app = createApp(App)

app.component('the-header', TheHeader)
app.component('the-footer', TheFooter)
app.component('base-modal', BaseModal)
app.component('alert-modal', AlertModal)
app.component('loading-spinner', LoaddingSpinner)
app.use(router)
app.use(store)

app.mount('#app')
