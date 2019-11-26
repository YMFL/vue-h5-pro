<template>
  <div class="certification">
    <div class="submitBtn">
      <van-button class="subBtn" @click="submitHanlder" type="warning">保存</van-button>
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
      ruleForm: {
        name: '',
        idCardNo: '',
        userId: ''
      }
    }
  },
  created () {
  },
  methods: {
    async submitHanlder () {
      Toast('提交成功！')
      this.$router.push({ path: '/my' })
    }
  }
}
</script>
<style lang="less" scoped>
  @import url('../../less/variate.less');

  .submitBtn {
    height: 50px;
    width: 345px;
    margin: 20px auto 80px;
    .subBtn {
      width: 100%;
      height: 50px;
    }
  }
</style>
