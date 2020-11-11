import Vue from 'vue'
import App from './App.vue'
import store from './store'
import JsonViewer from 'vue-json-viewer'
import { BootstrapVue } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(JsonViewer)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
