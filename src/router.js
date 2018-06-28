import Vue from 'vue'
import Router from 'vue-router'
import Turn from './views/Turn'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:player',
      name: 'player',
      component: Turn
    },
    {
      path: '*',
      redirect: '/1'
    }
  ]
})
