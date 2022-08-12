import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n/index'
import router from './router'
import store from './store'
import { setMode } from './utils'
import './style/index.scss'

// 不同模式样式
let mode = window.localStorage.getItem('mode')
if (mode) {
  if (mode === 'dark') {
    setMode(true)
  } else {
    setMode(false)
  }
} else {
  // tp.isDarkMode().then((res) => {
  //   if (res.result && res.data) {
  //     setMode(true)
  //   } else {
  //     setMode(false)
  //   }
  // })
}

// 当不是 dapp 浏览器的时候
// if (navigator.userAgent.indexOf('TokenPocket') === -1) {
//   // 获取系统主题
//   const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)') // 是深色
//   if (isDarkTheme.matches) {
//     // 是深色 主题设置为深色。
//     document.documentElement.setAttribute('theme', 'dark')
//   } else {
//     // 不是深色 主题设置为浅色。
//     document.documentElement.removeAttribute('theme')
//   }
// }

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
