<template>
    <div class="member3">
      <mt-header>
        <router-link to="/cmembercenter" slot="left" class="con">
          <img src="../../assets/Cleft.png" alt="" id="Cleft">
          <span id="load">兑换会员</span>
        </router-link>
      </mt-header>
      <p class="buy-for">成功兑换后将关联到当前帐号：<span>00000</span> </p>
      <form class="form-style">
        <input type="text"  placeholder="请输入10位卡号" v-model="bandNum" @keydown="bankkey" :maxlength="10" oninput="value=value.replace(/[^\d]/g, '')" >
        <input type="text"  placeholder="请输入6位卡密" @keydown="bankkey" :maxlength="6" v-model="bandNum2">
      </form>
      <p class="green" @click="getColor" v-if="btnshow">兑换</p>
      <p class="determine" v-if="!btnshow">兑换</p>
      <transition name="bounce">
      <div class="btan" v-if="p">
        <div class="btan1">
          <span class="btan2"></span>
          <span  class="btan3"></span>
        </div>
        <p class="btan4">无效的卡号</p>
        <div class="btan5"  @click="yue">确认</div>
      </div>
      </transition>
      <footer class="binding">
        <h3>——温馨提示——</h3>
        <p>新兑换的会员服务，权益以「会员说明」为准。</p>
        <p>月卡:<b>30次</b>减免配送费。</p>
        <p>季卡:<b>90次</b>减免配送费。</p>
        <p>年卡:<b>360次</b>次减免配送费。</p>
        <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
      </footer>
    </div>
</template>

<script>
    export default {
        name: "CMemberCenter3",
      data(){
          return{
            bandNum:"",
            bandNum2:"",
            btnshow:false,
            p:false
          }
      },
      methods: {
        bankkey(e){
          if (this.bandNum.length>=10 && this.bandNum2.length>=6){
            this.btnshow=true;
          }
          if(this.bandNum.length<10 || this.bandNum2.length<6){
            this.btnshow=false;
          }
      },
      getColor(){
          if (this.p==false){
            this.p=true;
          }
        },
        yue(){
          if (this.p==true){
            this.p=false;
          }
        }
    }}
</script>

<style scoped>
  .member3 {
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
  .buy-for{
    font-size: .8rem;
    color: #666;
    line-height: 2rem;
    padding-left: .7rem;
    margin-top: 0.3rem;
    margin-bottom: 0;
  }
  .form-style{
    display: flex;
    flex-direction: column;
  }
  .form-style input{
    border: 1px solid #f5f5f5;
    height: 2rem;
    font-size: .75rem;
    color: #999;
    padding-left: .7rem;
  }
  .determine{
    background-color: #ccc;
    font-size: .8rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.9rem;
    border-radius: .2rem;
    margin-top: .7rem;
    font-weight: 700;
  }
  .green{
    background-color: #4cd964;
    font-size: .8rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.9rem;
    border-radius: .2rem;
    margin-top: .7rem;
    font-weight: 700;
  }
  .binding{
    margin-top: 1rem;
  }
  .binding h3{
    text-align: center;
    font-weight: 400;
    font-size: .65rem;
    color: #aaa;
    margin-bottom: .6rem;
  }
  .binding p{
    padding-left: 2rem;
    font-size: .5rem;
    color: #aaa;
    line-height: 1rem;
    margin-bottom: 0;
  }
  /*弹出框*/
  .btn{
    background-color:#4cd964;
    width: 90%;
    margin: 1rem auto;
  }
  .btan{
    position: absolute;
    top: 43%;
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
