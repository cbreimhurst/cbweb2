import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
