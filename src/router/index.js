import Vue from 'vue'
import Router from 'vue-router'
import HelloSPA from '../components/HelloSPA'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloSPA',
      component: HelloSPA

    }
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})
