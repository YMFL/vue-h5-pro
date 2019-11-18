<template>
  <div class="bank">
    <div class="backBtn">
      <van-button class="subBtn" @click="backHanlder" type="warning">点一下</van-button>
    </div>
    <div class="backBtn">
      <van-button class="subBtn" @click="outHanlder" type="warning">登出</van-button>
    </div>
  </div>
</template>
<script>
import {
  Cell,
  Field,
  Button,
  Toast,
  Uploader,
  Dialog,
  CellGroup
} from 'vant'

import {
  removeToken
} from '@/utils/auth'

export default {
  name: 'certification',
  components: {
    [Cell.name]: Cell,
    [Button.name]: Button,
    [Toast.name]: Toast,
    [Uploader.name]: Uploader,
    [Dialog.name]: Dialog,
    [CellGroup.name]: CellGroup,
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
