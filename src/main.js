import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia, PiniaVuePlugin } from 'pinia';

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.css";

const pinia = createPinia();
Vue.use(PiniaVuePlugin);

new Vue({
  router,
  render: h => h(App),
  pinia,
}).$mount('#app')

