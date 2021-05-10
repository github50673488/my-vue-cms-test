import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/tabbar/HomeContainer'
import Member from '../components/tabbar/MemberContainer'
import Search from '../components/tabbar/SearchContainer'
import Shopcar from '../components/tabbar/ShopcarContainer'
import NewsList from '../components/news/NewsList'
import NewsInfo from '../components/news/NewsInfo'
import PhotoList from '../components/photos/PhotoList'
import PhotoInfo from '../components/photos/PhotoInfo.vue'
import GoodsList from '../components/goods/GoodsList.vue'
import GoodsInfo from '../components/goods/GoodsInfo.vue'
import GoodsDesc from '../components/goods/GoodsDesc.vue'
import GoodsComment from '../components/goods/GoodsComment.vue'

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
    },
    {
      path: '/home/newslist',
      component: NewsList
    },
    {path: '/home/newsinfo/:id', component: NewsInfo},
    {path: '/home/photolist', component: PhotoList},
    {path: '/home/photoinfo/:id', component: PhotoInfo},
    {path: '/home/goodslist', component: GoodsList},
    {path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo'},
    {path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc'},
    {path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment'}

  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})
