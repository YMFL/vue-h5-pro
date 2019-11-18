import ajax from '@/utils/ajax'

/**
 * 普通登录
 */
export const postLogin = data =>
  ajax.post('auth-service/login?type=verifyCode', data)

/**
 * 发送验证码
 * @param {string} mobile 手机号码
 */
export const sendSms = mobile =>
  ajax.get({
    url: 'auth-service/login/verifyCode',
    params: { mobile }
  })
