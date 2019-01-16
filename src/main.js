import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../node_modules/uikit/dist/css/uikit.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
