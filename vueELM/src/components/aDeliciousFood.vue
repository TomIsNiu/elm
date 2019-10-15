<template>
    <div class="div1">
      <div class="header">
        <a href="#" class="a1"><img src="../assets/sousuo.png" alt=""></a>
        <p>{{diquInfo.name}}</p>
        <a href="#" class="a2"><img src="../assets/touxinag.png" alt=""></a>
      </div>
      <div class="swiper-container foodsort">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul class="ul1">
              <a href="#" v-for="(p1,i1) in foodArr1" :key="i1">
                <img :src="urlArr+p1.image_url" alt="" class="img1">
                <p class="span1">{{p1.title}}</p>
              </a>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul class="ul2">
              <a href="#" v-for="(p2,i2) in foodArr2" :key="i2">
                <img :src="urlArr+p2.image_url" alt="" class="img1">
                <p class="span1">{{p2.title}}</p>
              </a>
            </ul>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="foods">
        <div class="fjsj">
          <img src="../assets/fjdp.png" alt="">
          <span>附近商家</span>
        </div>
        <ul>
          <li v-for="(p,i) in shopListInfo" :key="i">
            <router-link class="a5" :to="{name:'ac',params:{id:p.id,latitude:p.latitude,longitude:p.longitude}}">
              <img :src=imgUrl+p.image_path alt="">
              <div class="rights">
                <div class="up">
                  <div class="upleft">
                    <span class="pp">品牌</span>
                    <span class="ppname">{{p.name}}</span>
                  </div>
                  <div class="upright" >
                    <span>{{p.supports[0].icon_name}}</span>
                    <span>{{p.supports[1].icon_name}}</span>
                    <span>票</span>
                  </div>
                </div>
                <div class="center">
                  <van-rate v-model="p.rating" size="0.5rem" gutter="0.05rem" allow-half  readonly/><span>{{p.rating}}</span><span>月售{{p.recent_order_num}}单</span>
                  <div class="centerRight">
                    <span class="fnzs">{{p.delivery_mode.text}}</span>
                    <span class="zsd">{{p.supports[1].name}}</span>
                  </div>
                  <div class="down">
                    <span>￥{{p.float_minimum_order_amount}}起送 / 配送费约￥{{p.float_delivery_fee}}</span>
                    <span class="time">{{p.order_lead_time}}</span>
                    <span class="jl">{{p.distance}} /</span>
                  </div>
                </div>
              </div>
              <div class="qf"></div>
            </router-link>
          </li>
        </ul>
      </div>
      <ul class="bottoms">
        <li><a href="#">
          <i class='iconfont icon-changyonglogo40' style="color:#1296db"></i>
          <p>外卖</p>
        </a></li>
        <li><a href="#">
          <i class='iconfont icon-zhizhen-' style="color:#707070"></i>          <p>搜索</p>
        </a></li>
        <li><a href="#">
          <i class='iconfont icon-dingdan' style="color:#707070"></i>          <p>订单</p>
        </a></li>
        <li><a href="#">
          <i class='iconfont icon-wode' style="color:#707070"></i>          <p>我的</p>
        </a></li>
      </ul>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import "../../node_modules/swiper/css/swiper.css"

    export default {
      name: "aDeliciousFood",
      data(){
        return {
          bottomimgs:["iconfont icon-dingdan-copy","icon-zhizhen","icon-dingdan","iconfont icon-weibiaoti-"],
          foodArr1:[],
          foodArr2:[],
          urlArr:'https://fuss10.elemecdn.com',
          swiperOption: {
            pagination: '.swiper-pagination',
            loop: true,
            thresholdTime: 100,
            direction:'horizontal',
            infinite:1,
            slidesToScroll:1,
          },
          lastInfo:[],
          diqu:'http://elm.cangdu.org/v2/pois/',
          diquInfo:[],
          value:3,
          shopUrl:'https://elm.cangdu.org/shopping/restaurants?latitude=',
          shopListInfo:[],
          imgUrl:'https://elm.cangdu.org/img/'
        }
      },
      computed:{

      },
      mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
          direction: 'horizontal',
          loop: false, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
     },
      created(){
        this.lastInfo=[this.$route.params.name,this.$route.params.latitude,this.$route.params.longitude];
        console.log(this.lastInfo);
        this.axios.get('https://elm.cangdu.org/v2/index_entry').then((p)=>{
          let Arr=[],Arr1=[];
          Arr=p.data;
          this.foodArr1=Arr.splice(0,8);
          this.foodArr2=Arr.splice(0,8);
        })
        // let onedz='http://elm.cangdu.org/v2/pois/31.143657,121.660764'
        this.axios.get(this.diqu + this.lastInfo[1] + ',' + this.lastInfo[2]).then((p)=>{
          this.diquInfo=p.data;
        })

        //https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762
        this.axios.get(this.shopUrl + this.lastInfo[1] + '&longitude=' + this.lastInfo[2]).then((p)=>{
          this.shopListInfo=p.data;
          console.log(this.shopListInfo);
        })
      }
    }
</script>

<style scoped>
 @import "//at.alicdn.com/t/font_1458386_a56xsq2yobq.css";
 /* 订单  icon-dingdan*/
 @import "//at.alicdn.com/t/font_1458391_gdd0c3o4ubn.css";
 /* 搜索 icon-zhizhen-*/
 @import "//at.alicdn.com/t/font_1458402_hsnv6u602e.css";
 /* 我的 icon-wode*/
 @import "//at.alicdn.com/t/font_1458410_e5oj2suzhd.css"
 /* 外卖 icon-changyonglogo40  */;
  .qf{
    clear: none;
  }
  .div1{
    width: 100%;
    height: 100%;
  }
  .header{
    width: 100%;
    height: 2.2rem;
    background: #3190E8;
    color: white;
    text-align: center;
    position: fixed;
    top: 0;

  }
  .a1{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
  }
  .header>p{
    text-align: center;
    padding-top: 0.5rem;
  }
  .a1>img,.a2>img{
    width: 100%;
  }
  .a2{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
  .foodsort{
    width: 100%;
    height: 10rem;
    background: white;
    margin-top: 2.2rem;
    text-align: center;
  }
  ul1,ul2{
    width: 100%;
    height: 10rem;
  }
  .ul1>a,.ul2>a{
    display: inline-block;
    width: 25%;
    height: 4.3rem;
    padding: 0.35rem 0;
  }
   .ul1>a>p, .ul2>a>p{
    color: #666666;
    font-size: 0.6rem;
  }
  .img1{
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin-bottom: 0.35rem;
  }
  .ul1{
    height: 10rem;
    overflow: hidden;
  }
  .ul2{
    height: 10rem;
  }
  .foods{
    width: 100%;
    background: white;
    margin-top: 0.7rem;
  }
  .fjsj{
    width: 100%;
    height: 2rem;
  }
  .fjsj>img{
    width: 0.9rem;
    height: 0.9rem;
    margin:0.5rem 0 0 0.7rem;
  }
  .fjsj>span{
    font-size: 0.6rem;
    color: #999999;
    margin-left:0.2rem;
    vertical-align: 0.3rem;
  }
  .foods>ul{
    width: 100%;
    overflow: hidden;
  }
  .foods>ul>li{
    width: 100%;
    height: 5rem;
    border-bottom: 0.05rem solid #e4e4e4;
  }
  .a5{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .a5>img{
    float: left;
    width: 20%;
    margin: 0.75rem 0 0 0.5rem;
  }
  .rights{
    width: 75%;
    display: inline-block;
    float: left;
    margin:0.5rem 0 0 0.2rem;
  }
  .up{
    width: 100%;
    display: flex;
    justify-content:space-between;
  }
  .pp{
    background: #ffd930;
    color: #333;
    font-size: 0.5rem;
    margin-right: 0.25rem;
    padding: 0 0.1rem;
  }
  .ppname{
    display: inline-block;
    font-size: 0.75rem;
    color: #333;
    padding-top: 0.1rem;
  }
  .upright{
    display: flex;
    flex-direction:row;
    justify-content:flex-end;
    color: #999;
    font-size: 0.6rem;
    padding: 0.1rem 0.05rem;
  }

  .upright>span{

    border: 0.05rem solid #f1f1f1;
    margin-left: 0.05rem;

  }
  .center{
    font-size: 0.5rem;
    color: #333333;
    margin-top: 0.6rem;
  }
  .centerRight{
    display: inline-block;
    float: right;
  }
  .fnzs{
    background: #3190e8;
    border-radius: 0.1rem;
    color: white;
  }
  .zsd{
    color: #3190e8;
    font-size: 0.6rem;
    margin-left: 0.1rem;
    border:0.05rem solid #3190e8;
  }
  .down{
    font-size: 0.6rem;
    margin-top: 0.6rem;
    color: #333333;
  }
  .jl{
    color: #999999;
    float: right;
  }
  .time{
    color: #3190e8;
    float: right;
  }
  .bottoms{
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
    position: fixed;
    bottom:-0.05rem;
    background: white;
  }
  .bottoms>li{
    width: 25%;
  }
  .bottoms>li>a{
    display: inline-block;
    width: 100%;
  }
 .bottoms>li>i{
   font-size: 1rem;
 }
  .bottoms>li>a>p{
    font-size: 0.6rem;
    color: #666666;
  }


</style>
