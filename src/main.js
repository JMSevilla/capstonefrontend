import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elemento from 'element-ui';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(elemento);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
