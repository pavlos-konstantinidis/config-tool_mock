import Vue from 'vue'
import App from './App.vue'
import store from './store'
import JsonViewer from 'vue-json-viewer'

Vue.config.productionTip = false
Vue.use(JsonViewer)


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
