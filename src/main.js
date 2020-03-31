import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'                  // 导入bootstrap.js
import 'bootstrap/dist/css/bootstrap.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue({})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
