import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.css";
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', VueSweetalert2.stopTimer)
      toast.addEventListener('mouseleave', VueSweetalert2.resumeTimer)
    }
}

Vue.use(VueSweetalert2, options);

import { createPinia, PiniaVuePlugin } from 'pinia';
const pinia = createPinia()
Vue.use(PiniaVuePlugin);

new Vue({
  router,
  render: h => h(App),
  pinia,
}).$mount('#app')

