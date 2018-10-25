import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/docs',
      name: 'docs',
      component: () => import(/* webpackChunkName: "docs" */ './views/Docs.vue')
    },
    {
      path: '/tools',
      name: 'tools',
      component: () => import(/* webpackChunkName: "sdk" */ './views/Tools.vue')
    },
    {
      path: '/api',
      name: 'api',
      component: () => import(/* webpackChunkName: "api" */ './views/Api.vue')
    },
    {
      path: '/apps',
      name: 'apps',
      component: () => import(/* webpackChunkName: "about" */ './views/Apps.vue')
    }
  ]
})
