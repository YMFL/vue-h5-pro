<template>
  <div class="login">
    <div class="topBg">
      <div class="subCont">
        <div>
          <img class="topImg" src="./img/ic_me_nav_user.png" alt="">
          <div class="subInput">
            <div class="subInputRow">
              <van-field
                class="phoneInput"
                :border="false"
                placeholder="请输入手机号"
                v-model="ruleForm.username">
                <img class="phoneImg" slot="left-icon" src="./img/img_login_phone.png" alt="">
              </van-field>
            </div>
            <div class="subInputRow" style="margin-bottom: 25px">
              <van-field
                class="phoneInput"
                :border="false"
                v-model="ruleForm.password"
                center
                placeholder="请输入短信验证码">
                <img class="phoneImg" slot="left-icon" src="./img/img_login_yzm.png" alt="">
                <span @click="clickQrCodeHandler" ref="qrBtn" :class="qrtime===0?'qrBtn':'timeBtn'" slot="button"
                      size="small">{{qrtime===0?'获取验证码':qrtime+'s'}}</span>
              </van-field>
            </div>
            <div class="subInputRow">
              <van-button :disabled="!qrHasCLick" @click="submitHandler" class="subBtn" type="warning">登录</van-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="kfPhone">
      联系微信：J395041293
    </div>
  </div>
</template>

<script>
import {
  Cell,
  Field,
  Button,
  Toast,
  Icon,
  CellGroup
} from 'vant'
// import { sendSms, postLogin } from '@/api/index'
import { setToken } from '@/utils/auth'

export default {
  name: 'login',
  components: {
    [Cell.name]: Cell,
    [Button.name]: Button,
    [Toast.name]: Toast,
    [Icon.name]: Icon,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field
  },
  data () {
    return {
      qrtime: 0,
      qrHasCLick: false,
      ruleForm: {
        password: '000000',
        username: '13586698844'
      }
    }
  },
  methods: {
    clickQrCodeHandler () {
      if (this.qrtime === 0) {
        if (!(/^1[34578]\d{9}$/.test(this.ruleForm.username))) {
          Toast('请输入正确手机号码！')
        } else {
          this.sendSmsHandler()
        }
      }
    },
    async sendSmsHandler () {
      this.qrHasCLick = true
      // 请求接口
      this.qrtime = 60
      let setTime = setInterval(() => {
        this.qrtime--
        if (this.qrtime === 0) {
          clearInterval(setTime)
        }
      }, 1000)
      // await sendSms(this.ruleForm.username)
      // this.qrHasCLick = true
      // // 请求接口
      // this.qrtime = 60
      // let setTime = setInterval(() => {
      //   this.qrtime--
      //   if (this.qrtime === 0) {
      //     clearInterval(setTime)
      //   }
      // }, 1000)
    },
    async submitHandler () {
      if (!this.ruleForm.password) {
        Toast('请输入验证码')
        return false
      }
      let result = { token: '12132312' }
      if (result.token) {
        setToken(result.token)
        Toast('登录成功！')
        this.$router.push({ path: '/home' })
      } else {
        Toast('登陆失败！')
      }

      // if (!this.ruleForm.password) {
      //   Toast('请输入验证码')
      //   return false
      // }
      // let result = await postLogin(this.ruleForm)
      // if (result.token) {
      //   setToken(result.token)
      //   Toast('登录成功！')
      //   this.$router.push({ path: '/home' })
      // } else {
      //   Toast('登陆失败！')
      // }
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('../../less/variate.less');

  .login {
    padding-bottom: 50px;
    background-image: url("./img/img_login_bg.png");
    background-repeat: no-repeat;
    background-size: 100%;
    .topBg {
      padding-top: 87px;
    }
    .subCont {
      text-align: center;
      margin: 0 auto;
      width: 325px;
      background: #FFFFFF;
      box-shadow: 0px 0px 10px 0px rgba(#5B2E0A, 0.1);
      border-radius: 5px;
      padding: 0 20px;
      .topImg {
        height: 80px;
        width: 80px;
        margin-top: -40px;
      }
      .subInput {
        margin-top: 41px;
        padding-bottom: 40px;
      }
      .phoneImg {
        height: 25px;
        width: 25px;
      }
      .subInputRow {
        margin-bottom: 20px;
        height: 50px;
        .subBtn {
          width: 100%;
          height: 50px;
        }
      }
      .phoneInput {
        border: 1px solid #DFE2EE;
        border-radius: 5px;
        height: 50px;
      }
    }
  }

  .kfPhone {
    margin-top: 85px;
    height: 15px;
    line-height: 1;
    font-weight: 400;
    font-size: 13px;
    color: @textColor;
    text-align: center;
  }

  .qrBtn {
    color: @orange;
  }

  .timeBtn {
    color: @textColor;
  }
</style>
