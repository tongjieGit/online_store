import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Authorize from '@/components/Authorize'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },{
      path: '/Authorize',
      name: 'Authorize',
      component: Authorize
    },
    // {
    //   path: '/',
    //   redirect:'Authorize'
    // }
  ]
})
