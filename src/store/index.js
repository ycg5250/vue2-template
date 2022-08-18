import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDark: false,
  },
  mutations: {
    setDark(state, payload) {
      state.isDark = payload
    },
  },
  actions: {},
  getters: {
    isDark(state) {
      return state.isDark
    },
  },
  modules: {},
})
