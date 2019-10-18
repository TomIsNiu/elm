<template>
    <div class="conversion">
      <mt-header>
        <router-link to="/cdiscounts" slot="left" class="con1">
          <img src="../../assets/Cleft.png" alt="" id="Cleft1">
          <span id="load1">兑换红包</span>
        </router-link>
      </mt-header>
      <form class="exchange-code">
        <input type="text" placeholder="请输入兑换码" class="exchange-input" v-model="band" @keydown="bankkey"  oninput="value=value.replace(/[^\d]/g, '')">
        <div class="input-container">
          <input type="text" placeholder="验证码" :maxlength="4" value="">
          <div class="img-change-img">
            <img :src="yan" alt="">
            <div class="change-img">
              <p>看不清</p>
              <p @click="getyan">换一张</p>
            </div>
          </div>
        </div>
      </form>
      <div class="green" @click="getdui" v-if="btnshow">兑换</div>
      <div class="determine" v-if="!btnshow">兑换</div>
      <transition name="bounce">
      <div class="btan" v-if="p">
        <div class="btan1">
          <span class="btan2"></span>
          <span  class="btan3"></span>
        </div>
        <p class="btan4">无效的兑换码</p>
        <div class="btan5"  @click="yue">确认</div>
      </div>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "Cconversion",
      data(){
          return{
            yan:"",
            band:"",
            btnshow:false,
            p:false
          }
      },
      created(){
        this.myHttp.post("/v1/captchas",{},(response)=>{
          this.yan=response.code
          console.log(response.code);
        },(err)=>{
          console.log(err);
        })
      },
      methods:{
        getyan(){
          this.myHttp.post("/v1/captchas",{},(response)=>{
            this.yan=response.code
            console.log(response.data);
          },(err)=>{
            console.log(err);
          })
        },
        bankkey(e){
            if (this.band.length>=1){
              this.btnshow=true;
            }
            if(this.band.length<=1){
              this.btnshow=false;
            }
          },
          getdui(){
            if (this.p==false){
              this.p=true;
            }
            this.myHttp.post("/v1/captchas",{},(response)=>{
              this.yan=response.code
              console.log(response.data);
            },(err)=>{
              console.log(err);
            })
          },
          yue(){
            if (this.p==true){
              this.p=false;
            }
          }
      }
    }
</script>

<style scoped>
  .conversion {
    width: 100%;
    height: 2rem;
    background-color: #3190e8;
  }
  #Cleft1 {
    width: 1.6rem;
    height: 1.6rem;
  }
  .con1 {
    display: flex;
    justify-content: start;
    align-items: start;
    /*padding-top: 1rem;*/
  }
  #load1 {
    width: 14.5rem;
    font-size: 1rem;
    color: white;
    line-height: 1.5rem;
    text-align: center;
  }
  .exchange-code{
    margin-top: 1.2rem;
    padding: 0 .5rem;
    display: block;
  }
  .exchange-input{
    width: 100%;
    font-size: .8rem;
    color: #666;
    padding: .6rem .4rem;
    border-radius: .2rem;
    border: 0;
  }
  .input-container{
    height: 2.5rem;
    display: flex;
    margin-top: .7rem;
  }
  .input-container input{
    font-size: .8rem;
    color: #666;
    padding: .4rem;
    border-radius: .2rem;
    flex: 3;
    border: 0;
  }
  .img-change-img{
    display: flex;
    align-items: center;
    flex: 2;
    margin-left: .3rem;
    background-color: #fff;
    padding-left: .2rem;
    border-radius: .15rem;
  }
  .img-change-img img{
    width: 3.5rem;
    height: 1.5rem;
    margin-right: .2rem;
  }
  .change-img{
    display: flex;
    flex-wrap: wrap;
    width: 2rem;
    justify-content: center;
  }
  .change-img p{
    font-size: .6rem;
    color: #666;
    line-height: 0.8rem;
    margin-bottom: 0;
  }
  .change-img p:nth-of-type(2){
    color: #3b95e9;
    margin-top: .2rem;
  }
  .determine{
    background-color: #ccc;
    font-size: .8rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 2rem;
    border-radius: .2rem;
    margin-top: .7rem;
  }
  .green{
    background-color: #4cd964;
    font-size: .8rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 2rem;
    border-radius: .2rem;
    margin-top: .7rem;
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
