import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import pinia from '@/store/index'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.css";

new Vue({
  router,
  render: h => h(App),
  pinia,
}).$mount('#app')

