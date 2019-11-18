import cookie from 'js-cookie'

export const setToken = token => cookie.set('token', token, { expires: 30 })

export const getToken = () => cookie.get('token')

export const removeToken = () => cookie.remove('token')

export const setReferer = referer => cookie.set('referer', referer)

export const getReferer = () => cookie.get('referer')

export const removeReferer = () => cookie.remove('referer')

export const setLoginState = state => cookie.set('login', state)

export const getLoginState = () => cookie.get('login')

export const removeLoginState = () => cookie.remove('login')
