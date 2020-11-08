import Vue from 'vue'
import App from './App.vue'
import store from './store'
import draggable from 'vuedraggable'
import UUID from "vue-uuid"

Vue.config.productionTip = false
Vue.use(draggable)
Vue.use(UUID)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
