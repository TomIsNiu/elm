<template>
    <div class="bding">
      <div class="bm">
        <router-link :to="{path:'/adeliciousfood/atakeout'}">
          <i class="iconfont icon-zuojian" style="line-height: 2.5rem; font-size: 1rem;color: white"></i>
        </router-link>
        <span class="bmi">订单列表</span>
      </div>
      <ul class="fukuan">
        <div class="header">
          <img :src=lastInfo[2] alt="">
          <span>{{lastInfo[1]}}</span>
          <button class="but" @click="zhi">支付</button>
          <transition name="bounce">
            <div class="btan" v-if="p">
              <div class="btan1">
                <span class="btan2"></span>
                <span  class="btan3"></span>
              </div>
              <p class="btan4">暂不支持支付功能</p>
              <div class="btan5"  @click="yin">确认</div>
            </div>
          </transition>
        </div>
        <li class="food-item" v-for="(v,i) in cartInfo" :key="i">
          <p class="food-name">{{v[0]}}</p>
          <div class="num-price">
            <span>x{{v[2]}}</span>
            <span>¥{{v[1]}}</span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "bDing",
      data(){
          return {
            lastInfo:[],
            cartInfo:[],
            p:false
          }
      },
      created(){
        this.lastInfo=JSON.parse(localStorage.getItem("history4"));
        this.cartInfo=JSON.parse(localStorage.getItem("history5"));
      },
      methods:{
       zhi(){
          if (this.p==false){
            this.p=true;
          }
        },
        yin(){
          if (this.p==true){
            this.p=false;
          }
        },
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1453346_v5w9ntjvvt.css";
  .bding{
    width: 100%;
  }
  .bm{
    background-color: #3190e8;
    z-index: 100;
    width: 100%;
    height: 2.5rem;
    position: relative;
  }
  .bmi{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center;
  }
  .header{
    padding: .7rem;
    border-bottom: .025rem solid #f5f5f5;
  }
  .header img{
    width: 1.3rem;
    height: 1.3rem;
    vertical-align: middle;
  }
  .header span{
    font-size: .9rem;
    color: #333;
  }
  .food-item{
    display: flex;
    justify-content: space-between;
    line-height: 1.8rem;
    padding: 0 .7rem;
  }
  .food-name{
    width: 11rem;
    font-size: .75rem;
    color: #666;
    margin-bottom: 0;
  }
  .num-price{
    flex:1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .num-price span:first-of-type{
    color: #f60;
  }
  .num-price span{
    font-size: .75rem;
    color: #666;
  }
  .fukuan{
    width: 100%;
    background: white;
    height: 7rem;
    overflow: auto;
  }
  .but{
    color: white;
    width: 4rem;
    height: 1.5rem;
    background: #3190e8;
    float: right;
    margin-right: 0.5rem;
    border: 0;
    border-radius: 0.2rem;
  }

  .btan{
    background-color:#4cd964;
    width: 90%;
    margin: 1rem auto;
  }
  .btan{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -6rem;
    margin-left: -6rem;
    width: 12rem;
    animation: tipMove .4s;
    background-color: #fff;
    padding-top: .6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px;
    border-radius: .25rem;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  .btan1{
    width: 3rem;
    height: 3rem;
    border: .15rem solid #f8cb86;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .btan2{
    width: .12rem;
    height: 1.5rem;
    background-color: #f8cb86;
  }
  .btan3{
    width: .2rem;
    height: .2rem;
    border: 1px;
    border-radius: 50%;
    margin-top: .2rem;
    background-color: #f8cb86;
  }
  /*.btan4{*/
  /*font-size: 1.5rem;*/
  /*color: #333;*/
  /*line-height: .9rem;*/
  /*text-align: center;*/
  /*margin-top: .8rem;*/
  /*padding: 0 .4rem;*/
  /*}*/
  .btan5{
    font-size: .8rem;
    color: #fff;
    font-weight: 700;
    /*margin-top: .8rem;*/
    background-color: #4cd964;
    width: 100%;
    text-align: center;
    line-height: 1.8rem;
    border: 1px;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }

</style>
