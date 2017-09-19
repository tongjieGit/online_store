import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    // {
    //   path: '/',
    //   component: Header,
    //   // redirect: '/Authorize/index',
    //   name: 'header',
    //   meta: {
    //     subtitle: 'header'
    //   },
    // }
  ]
})

