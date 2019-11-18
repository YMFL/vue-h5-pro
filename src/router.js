import Vue from 'vue'
import Router from 'vue-router'
import Layout from './view/layout'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('./view/login'),
      meta: {
        title: '登陆'
      }
    },
    {
      name: 'my',
      path: '/my',
      component: Layout,
      redirect: '/my/index',
      meta: {
        title: '我的'
      },
      children: [{
        path: 'index',
        component: () => import('./view/my'),
        name: 'my',
        meta: {
          title: '我的',
          icon: 'sy',
          tabNum: 1,
          keepAlive: true
        }
      }]
    },
    {
      name: 'home',
      path: '/home',
      redirect: '/home/index',
      component: Layout,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: 'index',
          component: () => import('./view/home'),
          name: 'home',
          meta: {
            title: '首页',
            icon: 'sy',
            tabNum: 2,
            keepAlive: true
          }
        },
        {
          name: 'certification',
          path: 'certification',
          component: () => import('./view/home/certification'),
          meta: {
            title: '实名认证'
          }
        }
      ]
    }
  ]
})
