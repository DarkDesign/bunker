import './assets/reset.scss'
import './assets/style.scss'
import 'primevue/resources/themes/vela-purple/theme.css'
import Button from 'primevue/button'
import Card from 'primevue/card'

import PrimeVue from 'primevue/config'
import InputNumber from 'primevue/inputnumber'
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Slider from 'primevue/slider'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'primeicons/primeicons.css'

createApp(App)
    .use(store)
    .use(router)
    .use(PrimeVue)
    .use(ToastService)
    .component('Button', Button)
    .component('Password', Password)
    .component('Slider', Slider)
    .component('Card', Card)
    .component('InputText', InputText)
    .component('InputNumber', InputNumber)
    .component('InputSwitch', InputSwitch)
    .component('Toast', Toast)
    .mount('#app')
