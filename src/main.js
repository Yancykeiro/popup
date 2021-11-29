import Vue from 'vue'
import App from './App.vue'
import popRegistry from './components/index'

Vue.use(popRegistry);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


