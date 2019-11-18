import fly from 'flyio'
import { Dialog, Toast } from 'vant'
// import { updateUrl } from './index'
import {
  getToken,
  removeToken } from './auth'
let toast
fly.config.baseURL = '/'
fly.config.withCredentials = true
fly.interceptors.request.use(req => {
  if (!toast) {
    toast = Toast.loading({
      duration: 0,
      loadingType: 'spinner',
      message: '加载中'
    })
  }

  if (getToken()) {
    req.headers['Authorization'] = 'Bearer ' + getToken()
  }
  return req
})

fly.interceptors.response.use(
  resp => {
    toast && toast.clear()
    toast = ''

    return resp.data
  },
  err => {
    toast && toast.clear()
    toast = ''
    if (err.status === 401) {
      Dialog.alert({
        message: '登录信息已失效，点击确认自动登录'
      }).then(() => {
        removeToken()
        window.location.assign(window.location.origin + window.location.pathname)
      })
    } else {
      Toast.fail(err.response ? err.response.data.message : err.message)
    }
  }
)

export default fly
