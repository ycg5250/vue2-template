import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n/index'
import router from './router'
import store from './store'
import './style/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
  // 预渲染
  // mounted() {
  //   document.dispatchEvent(new Event('custom-render-trigger'))
  // },
}).$mount('#app')
