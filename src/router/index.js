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
  ]
})
