import Vue from 'vue'
import Router from 'vue-router'
import aFirst from '../components/aFirst'
import aSeachCity from  '../components/aSearchCity'
import aDeliciousFood from '../components/aDeliciousFood'

import bMine from '../components/bMine'
import bDeng from '../components/bDeng'
import bXiu from '../components/bXiu'

import CeleAPP from '../components/CeleAPP'
import  Cserver from '../components/Cserver'
import Ccon from '../components/Ccon'
import Cintegral from '../components/Cintegral'
import  Cbalance from '../components/Cbalance'
import  Cbalance2 from '../components/Cbalance2'
import  Jifen from '../components/Cjifen'
import Jifen2 from '../components/Cjifen2'
Vue.use(Router)
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

export default new Router({
  routes: [
    {path:'/',redirect:'/afirst'},
    {path:'/afirst',component:aFirst},
    {path:'/aseachcity',component:aSeachCity,name:'aa'},
    {path:'/adeliciousfood',component:aDeliciousFood,name:'ab'},

    {path:'/bMine',component:bMine},
    {path:'/bDeng',component: bDeng},
    {path:'/bXiu',component:bXiu},

    {path: '/cele',component:CeleAPP},//跳转到下载App页面
    {path: '/cserver',component:Cserver},//服务中心页面
    {path:'/ccon',component:Ccon},//服务中心页面跳转的组件
    {path:'/cintegral',component:Cintegral},//积分商城
    {path:'/cbalance',component:Cbalance},//我的余额
    {path:"/cbalance2",component:Cbalance2},//余额问题
    {path:"ifen",component:Jifen},//我的积分
    {path:"ifen2",component:Jifen2}//积分问题
  ]
})
