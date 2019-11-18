export const isWeChat = () => {
  const nav = navigator.userAgent.toLowerCase()
  return nav.includes('micromessenger')
}

export const updateUrl = url => {
  const key = 'time='
  const reg = new RegExp(key + '\\d+')
  const timestamp = new Date().getTime()

  if (url.indexOf(key) > -1) {
    return url.replace(reg, key + timestamp)
  } else {
    if (url.indexOf('?') > -1) {
      var urlArr = url.split('?')

      if (urlArr[1]) {
        return urlArr[0] + '?' + key + timestamp + '&' + urlArr[1]
      } else {
        return urlArr[0] + '?' + key + timestamp
      }
    } else {
      if (url.indexOf('#') > -1) {
        return url.split('#')[0] + '?' + key + timestamp + location.hash
      } else {
        return url + '?' + key + timestamp
      }
    }
  }
}
