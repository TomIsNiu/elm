<template>
  <!--我的积分-->
    <div id="jifen">
      <mt-header>
        <router-link to="/adeliciousfood/bMine" slot="left" class="con">
          <img src="../../assets/Cleft.png" alt="" id="Cleft">
          <span id="load">我的积分</span>
        </router-link>
      </mt-header>
      <div id="dang">
        <div id="current">
          <div id="Dcurrent">
            <span id="qian">当前积分</span>
            <p id="con">
              <img src="../../assets/Cwen.png" alt="" id="Cwen">
              <router-link :to="{path:'/jifen2',query:{name:this.products.pointtextCaption,con:this.products.pointtextContent}}">积分说明</router-link>
            </p>
          </div>
          <p>
            <span id="ling">0</span>
            <span>分</span>
          </p>
          <mt-button type="default" id="tixian"  @click="yin">积分兑换商品</mt-button>
          <transition name="bounce">
          <div class="btan" v-if="p">
            <div class="btan1">
              <span class="btan2"></span>
              <span  class="btan3"></span>
            </div>
            <p class="btan4">快去下单赚取大量积分吧</p>
            <div class="btan5"  @click="yue">确认</div>
          </div>
          </transition>
        </div>
      </div>
      <p id="detail">最近30天积分记录</p>
      <div id="Cdetail">
        <img src="../../assets/Cdetail.png" alt="">
        <p>最近30天无积分记录</p>
        <p id="kuai">快去下单赚取大量积分吧</p>
      </div>
    </div>
</template>

<script>
  // import { Dialog } from 'vant';
  // import Dialog from 'vant/lib/dialog';
  // import 'vant/lib/dialog/style/less';
    export default {
        name: "Cjifen",
      data() {
        return {
          products: [],
          p:false
        }
      },
      // components:{
      //   [Dialog.Component.name]: Dialog.Component
      // },
      methods:{
        yin(){
          if (this.p==false){
            this.p=true;
          }
        },
        yue(){
          if (this.p==true){
            this.p=false;
          }
        }
      },

      created(){
        this.myHttp.get("/v3/profile/explain",(response)=>{
          this.products = response;
          console.log(this.products);
        })
      }

    }
</script>

<style scoped>
  #jifen {
    width: 100%;
    height: 2rem;
    background-color: #3190e8;
  }

  #Cleft {
    width: 1.5rem;
    height: 1.5rem;
  }

  .con {
    display: flex;
    justify-content: start;
    align-items: start;
    padding-top: 0.2rem;
  }
  h1{
  margin-bottom: 0;
}
  #load {
    width: 15rem;
    font-size: 1rem;
    color: white;
    line-height: 1.5rem;
    text-align: center;
  }
  /*积分问题*/
  #dang{
    padding: .3rem;
    background-color: #3190e8;
  }
  #current{
    padding: .4rem;
    background-color: #fff;
    border-radius: .15rem;
  }
  #Dcurrent{
    display: flex;
    height: 1.2rem;
    justify-content: space-between;
    font-size: .65rem;
  }
  #qian{
    color: #666;
  }
  #con{
    display: inline-block;
    color: #3190e8;
  }
  #Cwen{
    width: 0.9rem;
    height: 0.9rem;
  }
  #ling{
    font-size: 1.8rem;
    color: #333;
  }
  #tixian{
    width: 100%;
    height: 2rem;
    font-size: 1rem;
    color: #fff;
    border-radius: .15rem;
    line-height: 2rem;
    text-align: center;
    background-color: #fe6d47;
  }
  #detail{
    font-size: 0.8rem;
    color: #999;
    line-height: 2rem;
    padding-left: .5rem;
  }
  #Cdetail{
    text-align: center;
    margin-top: 1rem;
  }
  #Cdetail img{
    width: 4rem;
    height: 4rem;
  }
  #Cdetail p{
    margin-top: .5rem;
    font-size: .7rem;
    color: #666;
  }
  #Cdetail #kuai{
    font-size: .5rem;
    color: #999;
  }
  /*弹出框*/
  .btn{
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
  .btan4{
    font-size: .7rem;
    color: #333;
    line-height: .9rem;
    text-align: center;
    margin-top: .8rem;
    padding: 0 .4rem;
  }
  .btan5{
    font-size: .8rem;
    color: #fff;
    font-weight: 700;
    margin-top: .8rem;
    background-color: #4cd964;
    width: 100%;
    text-align: center;
    line-height: 1.8rem;
    border: 1px;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }

</style>
<style>
  h1{
    margin-bottom: 0;
  }
  </style>
