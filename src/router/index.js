import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Authorize from '@/components/Authorize'
import Layout from '@/components/Layout'
import First from '@/components/First'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Header',
    //   component: Header
    // },
    {
      path: '/',
      component: Header,
      // redirect: '/Authorize/index',
      name: 'header',
      meta: {
        subtitle: 'header'
      },
      children: [{
        path: '/Authorize',
        name: '授权',
        meta: {
          sidebar: true
        },
        component: Authorize
      }]
    }
  ]
})

