import Vue from 'vue'
import App from './App.vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import axios from 'axios'

Vue.use(VXETable)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
new Vue({
  render: h => h(App),
}).$mount('#app')
