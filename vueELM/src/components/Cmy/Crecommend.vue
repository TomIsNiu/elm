<template>
  <!--推荐有奖-->
    <div id="recommend">
      <mt-header>
        <router-link :to="{path:'/cdiscounts'}" slot="left" class="con">
          <img src="../../assets/Cleft.png" alt="" id="Cleft">
          <span id="load">推荐有奖</span>
        </router-link>
      </mt-header>
      <img src="../../assets/tui.png" alt="" id="tui">
      <div class="Cwei">
        <div class="weixin">
          <img src="../../assets/Cweixin.png" alt="" @click="yue">
          <p>邀请微信好友</p>
        </div>
        <div class="qq">
          <img src="../../assets/QQ.png" alt="" @click="yue">
          <p>邀请qq好友</p>
        </div>
        <div class="yao">
          <img src="../../assets/Cerwei.png" alt="" @click="yue">
          <p>面对面邀请</p>
          <transition name="bounce">
          <div class="btan" v-if="p">
            <div class="btan1">
              <span class="btan2"></span>
              <span  class="btan3"></span>
            </div>
            <p class="btan4">请在饿了么APP打开</p>
            <div class="btan5"  @click="yin">确认</div>
          </div>
          </transition>
        </div>
      </div>
      <div class="invite">
        <div class="lei">
          <p>累计收益</p>
          <p><span>0</span>元</p>
        </div>
        <div class="cheng">
          <p>成功邀请</p>
          <p><span>0</span>人</p>
        </div>
      </div>
      <p class="income">-收益明细-</p>
      <div class="money">
        <img src="../../assets/Cmoney.png" alt="">
        <p>还不赶紧去邀请好友</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Crecommend",
      data(){
          return{
            p:false
          }
      },
      methods:{
        yue(){
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

<style  scoped>
  #recommend {
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
  #load {
    width: 15rem;
    font-size: 1rem;
    color: white;
    line-height: 1.5rem;
    text-align: center;
  }
  #tui{
    width: 100%;
  }
  /*微信 qq 二维码*/
  .Cwei{
    display: flex;
    padding: 0.6rem 0;
    background-color: #fff;
  }
  .weixin, .qq, .yao{
    -webkit-box-flex: 1;
    flex: 1;
    text-align: center;
    padding-top: 0.2rem;
  }
  .weixin img,.qq img,.yao img{
    width: 3rem;
    height: 3rem;
  }
  .weixin p,.qq p,.yao p{
   font-size: 0.6rem;
    color: #333;
  }
  /*邀请*/
  .invite{
    display: flex;
    margin-top: 1rem;
    font-size: .5rem;
    color: #666;
  }
  .lei{
    flex: 1;
    text-align: center;
  }
  .lei p,.cheng p{
    color: #666;
    margin-bottom: 0;
  }
  .lei p span,.cheng p span{
    font-size: 1rem;
    color: #ff5633;
    font-weight: 700;
  }
  .cheng{
    flex: 1;
    text-align: center;
    border-left: .025rem solid #ddd;;
  }
  .income{
    font-size: .5rem;
    color: #666;
    text-align: center;
    margin-top: 1rem;
  }
  .money{
    text-align: center;
    margin-top: 1rem;
  }
  .money img{
    width: 1.8rem;
    height: 2rem;
  }
  .money p{
    font-size: .5rem;
    color: #999;
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
<style>
  h1{
    margin-bottom: 0;
  }
  .btan4{
    font-size: 1.5rem;
    color: #333;
    line-height: .9rem;
    text-align: center;
    margin-top: .8rem;
    padding: 0 .4rem;
  }
</style>
