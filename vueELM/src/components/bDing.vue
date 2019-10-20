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
          <button class="but">支付</button>
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
          }
      },
      created(){
        this.lastInfo=JSON.parse(localStorage.getItem("history4"));
        this.cartInfo=JSON.parse(localStorage.getItem("history5"));
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
</style>
