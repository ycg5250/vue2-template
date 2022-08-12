import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/rule',
    name: 'Rule',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Rule.vue'),
  },
]

const router = new VueRouter({
  routes,
})

//获取原型对象上的 replace 函数
const originalReplace = VueRouter.prototype.replace
//修改原型对象中的 replace 方法
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err)
}

export default router
