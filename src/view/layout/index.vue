<template>
  <div class="layout">
    <van-nav-bar
      :title="title"
      :left-arrow="!tabShow"
      @click-left="onClickLeft">
    </van-nav-bar>
    <transition :name="routerDire">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view class="router"></router-view>
      </keep-alive>
      <router-view class="router" v-else></router-view>
    </transition>

    <van-tabbar v-model="active" fixed v-if="tabShow">
      <van-tabbar-item name="home" icon="home-o" replace to="/home/index">首页</van-tabbar-item>
      <van-tabbar-item name="my" icon="setting-o" replace to="/my/index">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {
  Tabbar,
  NavBar,
  TabbarItem
} from 'vant'

export default {
  name: 'layout',
  components: {
    [Tabbar.name]: Tabbar,
    [NavBar.name]: NavBar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      active: 0,
      title: '首页',
      tabShow: false,
      // 页面切换方向
      routerDire: 'forward'
    }
  },
  computed: {},
  mounted () {
    this.checkRouter()
  },
  methods: {
    checkRouter () {
      if (this.$route.name === 'home') {
        this.active = 0
      } else if (this.$route.name === 'my') {
        this.active = 1
      } else {
        this.active = null
      }
      if (this.active === null) {
        this.tabShow = false
      } else {
        this.tabShow = true
      }
      this.title = this.$route.meta.title
    },
    onClickLeft () {
      this.routerDire = 'back'
      this.$router.back()
    }
  },
  watch: {
    $route: {
      handler: function (to, from) {
        if (Boolean(to.meta.tabNum) && Boolean(from.meta.tabNum)) {
          if (to.meta.tabNum > from.meta.tabNum) {
            this.routerDire = 'back'
          } else {
            this.routerDire = 'forward'
          }
        }
        this.checkRouter()
        // 路由跳转后 指定方向为下一页
        this.$nextTick(() => {
          this.routerDire = 'forward'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('../../less/variate.less');

  .back-enter-active,
  .back-leave-active,
  .forward-enter-active,
  .forward-leave-active {
    will-change: transform;
    transition: transform @transitionTime;
    position: absolute;
    height: 100%;
    backface-visibility: hidden;
    perspective: 1000;
  }

  .back-enter {
    opacity: 0.75;
    transform: translate3d(-50%, 0, 0) !important;
  }

  .back-enter-active {
    z-index: -1 !important;
    transition: transform @transitionTime;
  }

  .back-leave-active {
    transform: translate3d(100%, 0, 0) !important;
    transition: transform @transitionTime;
  }

  .forward-enter {
    transform: translate3d(100%, 0, 0) !important;
  }

  .forward-enter-active {
    transition: transform @transitionTime;
  }

  .forward-leave-active {
    z-index: -1;
    opacity: 0.65;
    transform: translate3d(-50%, 0, 0) !important;
    transition: transform @transitionTime;
  }

</style>
