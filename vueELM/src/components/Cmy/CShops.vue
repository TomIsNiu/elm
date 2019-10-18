<template>
    <!--商家详情-->
  <div class="cshops">
    <div class="header-top">
      <router-link :to="{path:'/'}">
      <img src="../../assets/Cleft.png" alt="" class="header-goback">
      <span class="title-header">商家详情</span>
      </router-link>
    </div>
    <div class="activites-container">
      <p>活动与属性</p>
      <ul class="actibities_ul">
        <li>
          <span style="background-color: rgb(240, 115, 115);">减</span>
          <span>满30减5，满60减8(APP专享)</span>
        </li>
        <li>
          <span style="background-color: rgb(237, 193, 35);">特</span>
          <span>123(APP专享)</span>
        </li>
      </ul>
      <ul class="actibities_ul">
        <li>
          <span style="background-color: rgb(153, 153, 153);">保</span>
          <span>已加入“外卖保”计划，食品安全有保障(APP专享)</span>
        </li>
        <li>
          <span style="background-color: rgb(87, 169, 255);">准</span>
          <span>准时必达，超时秒赔(APP专享)</span>
        </li>
        <li>
          <span style="background-color: rgb(153, 153, 153);">票</span>
          <span>该商家支持开发票，请在下单时填写好发票抬头(APP专享)</span>
        </li>
      </ul>
    </div>
    <div class="shops-status">
      <router-link :to="{path: '/cfood'}" class="shop_status_header">
        <span class="shop_detail_title">食品监督安全公示</span>
        <div>
          <span class="identification_detail">企业认证详情  ></span>
        </div>
      </router-link>
      <div class="shops-detail">
        <div>
          <i class="iconfont icon-xiaolianmanyifuwu" style="color:#8ada19;
   font-size: 2.3rem;margin-right: 0.6rem"></i>
        </div>
        <div class="check-date">
          <p>
            <span>监督检查结果：</span>
            <span class="shop_status_well">良好</span>
          </p>
          <p>
            <span>检查日期:</span>
            <span></span>
          </p>
        </div>
      </div>
    </div>
    <div class="shops-info">
      <p class="shops-header">商家信息</p>
      <p>CoCo奶茶</p>
      <p>地址：江西省南昌市青云谱区洪城路006号国贸广场15层1508</p>
      <p>营业时间：[06:15/06:30]</p>
      <p @click="getimg">
        <span>营业执照</span>
        <span> ></span></p>
      <p @click="getgirl">
        <span>餐饮许可证</span>
        <span> ></span>
      </p>
    </div>
    <div class="license_container" v-if="p" @click="license">
      <img :src=con alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "CShops",
      data(){
          return{
            con:require("../../assets/Cfixed.jpg"),
            p:false
          }
      },
      methods:{
          getimg(){
              this.p=true;
            this.con=require("../../assets/Cfixed.jpg")
          },
        getgirl(){
            this.p=true;
            this.con=this.con===require("../../assets/Cfixed.jpg")?require("../../assets/Cgirlshops.jpg"):require("../../assets/Cfixed.jpg");
        },
        license(){
          this.p=false;
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1458274_etzls80kh8.css";
  .cshops{
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .header-top{
    background-color: #3190e8;
    position: fixed;
    flex: 1;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
  }
  .header-goback{
    width: 2rem;
    height: 1.6rem;
    flex: 2;
    color: white;
    line-height: 2rem;
    margin-left: .4rem;
  }
  .title-header{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center;
    font-size: 0.97rem;
    font-weight: 700;
  }
  .activites-container {
    background-color: #fff;
    margin-top: 2.4rem ;
    padding-bottom: .4rem;
    margin-bottom: 0.4rem;
  }
  .activites-container p{
    font-size: .75rem;
    color: #333;
    line-height: 1.8rem;
    padding-left: .6rem;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: .3rem;
  }
  .actibities_ul{
    padding: 0 .6rem;
  }
  .actibities_ul li{
    margin-bottom: .2rem;
  }
  .actibities_ul li span:first-of-type{
    font-size: .45rem;
    color: #fff;
    padding: .1rem;
    border: 1px;
    border-radius: .1rem;
    margin-right: .2rem;
  }
  .actibities_ul li span:nth-of-type(2){
    font-size: .65rem;
    color: #666;
  }
  .shops-status{
    background-color: #fff;
    margin-bottom: .4rem;
  }
  .shop_status_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1.8rem;
    padding: 0 .6rem;
    border-bottom: .025rem solid #f1f1f1;
  }
  .shop_detail_title{
    font-size: .9rem;
    color: #333;
  }
  .identification_detail{
    font-size: .8rem;
    color: #bbb;
    vertical-align: middle;
  }
  .shops-detail{
    display: flex;
    padding: .6rem;
  }
  .check-date{
    font-size: .7rem;
    color: #666;
  }
  .check-date p{
    margin-top: 0.4rem;
    margin-bottom: 0;
  }
  .shop_status_well{
    color: #7ed321;
  }
  .shops-info{
    background-color: #fff;
    margin-bottom: .4rem;
  }
  .shops-info p:first-of-type{
    line-height: 1rem;
    /*padding: 0 .6rem;*/
    font-size: 0.9rem;
    color: #333;
    border-bottom: .025rem solid #f1f1f1;
  }
  .shops-info p{
    font-size: .7rem;
    color: #666;
    padding: .7rem .6rem .7rem 0;
    margin-left: .6rem;
    margin-bottom: 0;
    border-bottom: .025rem solid #f5f5f5;
  }
  .shops-info p:nth-of-type(5), .shops-info p:nth-of-type(6){
    display: flex;
    justify-content: space-between;
  }
  .shops-info p span:nth-of-type(2){
    width: 1rem;
    height:1rem;
  }
 .license_container {
    position: fixed;
    top: 0;
    left:0 ;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    z-index: 101;
  }
  .license_container img{
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>
