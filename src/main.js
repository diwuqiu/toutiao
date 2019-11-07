import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from '@/api'
import plugin from '@/components'
import '@/style/index.less'
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(plugin)
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
