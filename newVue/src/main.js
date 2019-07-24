import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs

new Vue({
  // 实例化router
  router,
  store, //store 的实例注入所有的子组件
  render: h => h(App),
}).$mount('#app')
