<template>
  <div class="my">
    <van-button class="subBtn" @click="submitHanlder" type="primary">随便点一下吧</van-button>
  </div>
</template>

<script>
import {
  Cell,
  Field,
  Button,
  Toast,
  Icon,
  Dialog,
  CellGroup
} from 'vant'

export default {
  name: 'my',
  components: {
    [Cell.name]: Cell,
    [Button.name]: Button,
    [Toast.name]: Toast,
    [Icon.name]: Icon,
    [Dialog.name]: Dialog,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field
  },
  data () {
    return {
      isTrue: true,
      bankKnow: false,
      backList: {
        cashBackAmt: '',
        list: [],
        waitCashBackAmt: ''
      },
      userInfo: {
        bankCardRes: {},
        haveCard: true,
        identityAuth: true,
        mobile: '',
        name: ''
      }
    }
  },
  methods: {
    submitHanlder () {
      this.$router.push({ path: '/home/certification' })
    },
    gotoCertification () {
      this.$router.push({ path: '/home/certification' })
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('../../less/variate.less');

  .my {
    text-align: center;
  }

  .subBtn {
    margin-top: 50px;
  }
</style>
