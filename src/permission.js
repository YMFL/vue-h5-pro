import router from './router'
import {
  getToken
} from './utils/auth'
// import store from '@/store'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  if (getToken()) {
    if (!whiteList.includes(to.path)) {
      next()
    } else {
      next({ name: 'my' })
    }
  } else {
    if (!whiteList.includes(to.path)) {
      next({
        name: 'login',
        query: { redirect: to.path }
      })
    } else {
      next()
    }
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
  // store.commit('updateDirection', 'forward')
})
