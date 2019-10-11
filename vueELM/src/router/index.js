import Vue from 'vue'
import Router from 'vue-router'
import aFirst from '../components/aFirst'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/first'},
    {path:'/first',component:aFirst}
  ]
})
