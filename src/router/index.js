import Vue from 'vue'
import Router from 'vue-router'
import HelloSPA from '../components/HelloSPA'
import child1 from '../components/child/child1'
import child2 from '../components/child/child2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloSPA',
      component: HelloSPA,
      children: [
        {
          path: '/child1',
          name: 'child1',
          component: child1
        },
        {
          path: '/child2',
          name: 'child2',
          component: child2
        }
      ]
    }
  ]
})
