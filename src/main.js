import Vue from 'vue'
import App from './App'
import router from './router'
import './permission'
import store from '@/store'
import 'normalize.css'
import './less/global.less'

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  const VConsole = require('vconsole')
  let x = new VConsole()
  console.log(x)
}

let vRouter = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
Vue.use({
  vRouter
})
