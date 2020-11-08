import Vue from 'vue'
import App from './App.vue'
import store from './store'
import draggable from 'vuedraggable'

Vue.config.productionTip = false
Vue.use(draggable)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
