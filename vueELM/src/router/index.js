import Vue from 'vue'
import Router from 'vue-router'
import aFirst from '../components/aFirst'
import aSeachCity from  '../components/aSearchCity'
import aDeliciousFood from '../components/aDeliciousFood'
import aShop from '../components/aShop'
import aShopFood from '../components/aShopFood'
import aPingJia from '../components/apingjia'
import aTakeOut from '../components/aTakeOut'
import aSortShop from '../components/aSortShop'
import aSearch from '../components/aSearch'

import bMine from '../components/bMine'
import bDeng from '../components/bDeng'
import bXiu from '../components/bXiu'
import bPath from '../components/bPath'
import bAddress from '../components/bAddress'
import bSou from '../components/bSou'
import bAccount from '../components/bAccount'
import bRevise from '../components/bRevise'
import bDizhi from '../components/bDizhi'
import bSdiz from '../components/bSdiz'
import bDing from '../components/bDing'
Vue.use(Router)
//引入swiper

import CeleAPP from '../components/Cmy/CeleAPP'
import  Cserver from '../components/Cmy/Cserver'
import Ccon from '../components/Cmy/Ccon'
import Cintegral from '../components/Cmy/Cintegral'
import  Cbalance from '../components/Cmy/Cbalance'
import  Cbalance2 from '../components/Cmy/Cbalance2'
import  Jifen from '../components/Cmy/Cjifen'
import Jifen2 from '../components/Cmy/Cjifen2'
import  Crecommend from '../components/Cmy/Crecommend'
import  Cdiscounts from '../components/Cmy/Cdiscounts'
import  Cdiscounts1 from '../components/Cmy/Cdiscounts1'
import  Cconversion from '../components/Cmy/Cconversion'
import  Cdaijinquan from '../components/Cmy/Cdaijinquan'
import Chistory from '../components/Cmy/Chistory'
import  Cmembercenter from '../components/Cmy/CMemberCenter'
import  Cmembercenter1 from '../components/Cmy/CMemberCenter1'
import  Cmembercenter2 from '../components/Cmy/CMemberCenter2'
import  Cmembercenter4 from '../components/Cmy/CMemberCenter4'
import Cmembercenter3 from '../components/Cmy/CMemberCenter3'
import Cshops from '../components/Cmy/CShops'
import  Cfood from '../components/Cmy/Cfood'
import Cconfirm from '../components/Cmy/Cconfirm'
import  COrderComment from '../components/Cmy/COrderComment'
import  Cinvoice from '../components/Cmy/Cinvoice'
Vue.use(Router)
//引入Vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//引入vant评分
import { Rate } from 'vant';
Vue.use(Rate);
//引入vant侧边导航
import { Sidebar, SidebarItem } from 'vant';
Vue.use(Sidebar);
Vue.use(SidebarItem);
//引入下拉菜单
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu).use(DropdownItem);
//引入vant
import { CouponCell, CouponList } from 'vant';
Vue.use(CouponCell).use(CouponList);


//路由
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',redirect:'/afirst'},
    {path:'/afirst',component:aFirst},
    {path:'/aseachcity',component:aSeachCity,name:'aa'},
    {path:'/adeliciousfood',component:aDeliciousFood,children: [
        {path:"",redirect:'atakeout'},
        {path:"atakeout",component:aTakeOut,name:'ss'},
        {path:'asearch',component:aSearch},
        {path:'bMine',component:bMine,name:'bMin'},
        {path:'bDing',component:bDing},
      ]},
    {path:"/ashop",component:aShop,children:[
        {path:"",redirect:'ashopfood'},
        {path:"ashopfood",component:aShopFood},
        {path:"apingjia",component:aPingJia},
      ]},
    {path:"/asortshop",component:aSortShop},


    {path:'/bDeng',component: bDeng},
    {path:'/bXiu',component:bXiu},
    {path:'/bPath',component:bPath},
    {path:'/bAddress',component: bAddress,name:'cc'},
    {path:'/bAccount',component:bAccount},
    {path:'/bRevise',component:bRevise},
    {path:'/bDizhi',component:bDizhi},
    {path:'/bSdiz',component:bSdiz,name:'bb',meta:{keepAlive: true}},
    {path:'/bSou',component:bSou,meta:{keepAlive: false}},
    {path:'/bDing',component:bDing},

    {path: '/cele',component:CeleAPP},//跳转到下载App页面
    {path: '/cserver',component:Cserver},//服务中心页面
    {path:'/ccon',component:Ccon},//服务中心页面跳转的组件
    {path:'/cintegral',component:Cintegral},//积分商城
    {path:'/cbalance',component:Cbalance},//我的余额
    {path:"/cbalance2",component:Cbalance2},//余额问题
    {path:"/jifen",component:Jifen},//我的积分
    {path:"/jifen2",component:Jifen2},//积分问题
    {path:"/crecommend",component:Crecommend},//推荐有奖
    {path:"/cdiscounts",component:Cdiscounts},//我的优惠
    {path:"/cdiscounts1",component:Cdiscounts1},//红包说明
    {path:"/cconversion",component:Cconversion},//兑换红包
    {path:"/cdaijinquan",component:Cdaijinquan},//代金券说明
    {path:"/chistory",component:Chistory},//历史红包
    {path:"/cmembercenter",component:Cmembercenter},//会员中心
    {path:"/cmembercenter1",component:Cmembercenter1},//会员说明
    {path:"/cmembercenter2",component:Cmembercenter2},//在线支付
    {path:"/cmembercenter4",component:Cmembercenter4},//购买记录
    {path:"/cmembercenter3",component:Cmembercenter3},//兑换会员
    {path:"/cshops",component:Cshops},//商家详情
    {path:"/cfood",component:Cfood},//食品安全监督公示
    {path:"/cconfirm",component:Cconfirm, name:'ccon'},//确认订单
    {path:"/cordercomment",component:COrderComment},//订单备注
    {path:"/cinvoice",component:Cinvoice}//选择发票抬头
  ]
})
