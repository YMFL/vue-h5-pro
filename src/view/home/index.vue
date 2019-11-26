<template>
  <div class="bank">
    <div class="backBtn">
      <van-button class="subBtn" @click="backHanlder" type="warning">点一下</van-button>
    </div>
    <div class="backBtn">
      <van-button class="subBtn" @click="outHanlder" type="warning">登出</van-button>
    </div>
    <div>
      <svg-icon icon-class="eye"/>
    </div>
    <div>
      <svg-icon icon-class="dashboard"/>
    </div>
    <div>
      <svg-icon icon-class="link"/>
    </div>
  </div>
</template>
<script>
import {
  Field,
  Button,
  Toast,
  Uploader,
  Dialog
} from 'vant'

import {
  removeToken
} from '@/utils/auth'

export default {
  name: 'certification',
  components: {
    [Button.name]: Button,
    [Toast.name]: Toast,
    [Uploader.name]: Uploader,
    [Dialog.name]: Dialog,
    [Field.name]: Field
  },
  data () {
    return {
      bankCard: ''
    }
  },
  created () {
  },
  methods: {
    backHanlder () {
      this.$router.push({ path: '/home/certification' })
    },
    outHanlder () {
      removeToken()
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('../../less/variate.less');

  .backBtn {
    text-align: center;
    .subBtn {
      margin: 50px auto 0;
    }
  }
</style>
