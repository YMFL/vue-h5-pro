import Vue from 'vue'
import App from './App'
import router from './router'
import './permission'
import store from '@/store'
import 'normalize.css'
import './less/global.less'
import { Dialog } from 'vant'

Vue.use(Dialog)
let vRouter = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
Vue.use({
  vRouter
})
