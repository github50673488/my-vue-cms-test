import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/tabbar/HomeContainer'
import Member from '../components/tabbar/MemberContainer'
import Search from '../components/tabbar/SearchContainer'
import Shopcar from '../components/tabbar/ShopcarContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/shopcar',
      component: Shopcar
    }
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})
