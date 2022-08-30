import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VCharts from 'vue-echarts'
import axios from 'axios'
Vue.prototype.$http = axios //正确的使用
axios.defaults.baseURL = '/io'

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
Vue.component('v-chart', VCharts)
