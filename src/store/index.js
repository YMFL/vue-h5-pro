import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const modules = {}
export default new Vuex.Store({
  state: {
    // direction: 'back' // 页面切换方向
  },
  getters: {
    // direction: state => state.direction
  },
  mutations: {
    // 更新页面切换方向
    // updateDirection (state, direction) {
    //   state.direction = direction
    // }
  },
  actions: {
  },
  modules
})
