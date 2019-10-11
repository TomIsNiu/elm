import Vue from 'vue'
import Router from 'vue-router'
import aFirst from '../components/aFirst'


import CeleAPP from '../components/CeleAPP'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/first'},
    {path:'/first',component:aFirst},
    // {path: '/cele',component:CeleAPP},
    // {path:''}
  ]
})
