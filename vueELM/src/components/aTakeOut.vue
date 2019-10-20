<template>
    <div class="takeout">
      <div class="header">
        <a href="#" class="a1"><img src="../assets/sousuo.png" alt=""></a>
        <p>{{diquInfo.name}}</p>
        <a href="#" class="a2" @click="huantu"><img src="../assets/touxinag.png" alt=""></a>
      </div>
      <div class="swiper-container foodsort">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul class="ul1">
              <router-link v-for="(p1,i1) in foodArr1" :key="i1" :to="{path:'/asortshop',query:{title:p1.title,latitude:lastInfo[1],longitude:lastInfo[2]}}">
                <img :src="urlArr+p1.image_url" alt="" class="img1">
                <p class="span1">{{p1.title}}</p>
              </router-link>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul class="ul2">
              <router-link v-for="(p2,i2) in foodArr2" :key="i2" :to="{path:'/asortshop',query:{title:p2.title,latitude:lastInfo[1],longitude:lastInfo[2]}}">
                <img :src="urlArr+p2.image_url" alt="" class="img1">
                <p class="span1">{{p2.title}}</p>
              </router-link>
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
            <router-link class="a5" :to="{path:'/ashop',query:{id:p.id,latitude:p.latitude,longitude:p.longitude}}">
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
                  <van-rate v-model="p.rating" size="0.5rem" gutter="0.05rem" allow-half  readonly/>
                  <span>{{p.rating}}</span>
                  <span>月售{{p.recent_order_num}}单</span>
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
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import "../../node_modules/swiper/css/swiper.css"
    export default {
        name: "aTakeOut",
      data(){
        return {
          lastInfo:[],
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
          diquInfo:[],
          value:0,
          shopListInfo:[],
          imgUrl:'https://elm.cangdu.org/img/'
        }
      },
      methods:{
          huantu(){
            this.$router.push({path:'/adeliciousfood/bMine'})
          }
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
        this.lastInfo=[this.$route.query.name,this.$route.query.latitude,this.$route.query.longitude];
          localStorage.setItem("history3",JSON.stringify(this.lastInfo))
        this.axios.get('https://elm.cangdu.org/v2/index_entry').then((p)=>{
          let Arr=[],Arr1=[];
          Arr=p.data;
          this.foodArr1=Arr.splice(0,8);
          this.foodArr2=Arr.splice(0,8);
        })
        // let onedz='http://elm.cangdu.org/v2/pois/31.143657,121.660764'
        this.axios.get('http://elm.cangdu.org/v2/pois/' + this.lastInfo[1] + ',' + this.lastInfo[2]).then((p)=>{
          this.diquInfo=p.data;
        })

        //https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762
        this.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=' + this.lastInfo[1] + '&longitude=' + this.lastInfo[2]).then((p)=>{
          this.shopListInfo=p.data;
        })
      }
    }
</script>

<style scoped>
  .takeout{
    width: 100%;
  }
  .qf{
    clear: none;
  }
  .header{
    width: 100%;
    height: 2.2rem;
    background: #3190E8;
    color: white;
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    position: fixed;
    top:0;
    z-index: 5;
  }
  .a1{
    display: inline-block;
    width: 1rem;
    height: 1rem;
  }
  .header>p{
    display:inline-block ;
    width: 6rem;
    height: 90%;
    font-size: 0.8rem;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .a1>img,.a2>img{
    width: 100%;
  }
  .a2{
    display: inline-block;
    width: 1rem;
    height: 1rem;
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
    padding-top: 0.5rem;
  }
  .fjsj>img{
    width: 0.9rem;
    height: 0.9rem;
    margin-left: 0.7rem;
  }
  .fjsj>span{
    font-size: 0.6rem;
    color: #999999;
    margin-left:0.2rem;
    vertical-align: 0;
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
</style>
