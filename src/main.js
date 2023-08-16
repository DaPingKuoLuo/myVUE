import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VCharts from 'vue-echarts'
import axios from 'axios'
import store from './store'
Vue.prototype.$http = axios //正确的使用
axios.defaults.baseURL = '/io'

Vue.config.productionTip = false
Vue.use(ElementUI);

const vm = new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
}).$mount('#app')
Vue.component('v-chart', VCharts)
