<template>
    <div class="member2">
      <mt-header>
        <router-link to="/cmembercenter" slot="left" class="con">
          <img src="../../assets/Cleft.png" alt="" id="Cleft">
          <span id="load">购买记录</span>
        </router-link>
      </mt-header>
      <div class="show-time">
        <div class="show">
          <p class="show-zhi">支付剩余时间</p>
          <van-count-down :time="time" style="font-size: 2rem;margin-bottom: 2rem" />
        </div>
      </div>
      <div class="xuan">选择支付方式</div>
      <div class="pay-way">
        <div class="pay-item">
        <div class="pay-icon">
          <img src="../../assets/Czhifubao.png" alt="" class="zhifubao">
          <span>支付宝</span>
        </div>
          <van-radio-group v-model="radio">
          <van-radio name="1" checked-color="#07c160"></van-radio>
        </van-radio-group>
      </div>
        <div class="pay-item">
          <div class="pay-icon">
            <img src="../../assets/Cweizhi.png" alt="" class="zhifubao">
            <span>微信</span>
          </div>
          <van-radio-group v-model="radio">
          <van-radio name="2" checked-color="#07c160"></van-radio>
        </van-radio-group>
        </div>
      </div>
      <p class="que" @click="yue">确认支付</p>
      <div class="btan" v-if="p">
        <div class="btan1">
          <span class="btan2"></span>
          <span  class="btan3"></span>
        </div>
        <p class="btan4">{{con}}</p>
        <div class="btan5"  @click="yin">确认</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CMemberCenter2",
      data() {
        return {
          time:  0,
          radio: '1',
          p:false,
          con:"暂不支持开放功能"
        };
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
            this.con="当前环境无法支付,请打开官方APP进行付款"
          }
        },
      },
      created(){
          this.p=true;
      }
    }
</script>

<style scoped>
  .member2 {
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
  .show-time{
    background-color: #fff;
    padding: .7rem;
    text-align: center;
  }
  .show-zhi{
    font-size: 0.8rem;
    color: #666;
    margin-top: 1rem;
  }
  .xuan{
    background-color: #f1f1f1;
    padding: 0 .7rem;
    font-size: .8rem;
    color: #666;
    line-height: 1.8rem;
  }
  .pay-way{
    background-color: #fff;
  }
  .pay-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .4rem .7rem;
    line-height: 2.6rem;
    border-bottom: .025rem solid #f5f5f5;
  }
  .pay-icon{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pay-icon span{
    font-size: .8rem;
    color: #666;
  }
  .zhifubao{
    width: 2rem;
    height: 2rem;
    margin-right: .2rem;
  }
  .que{
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .5rem;
    font-weight: 700;
  }
  .btan{
    background-color:#4cd964;
    width: 90%;
    margin: 1rem auto;
  }
  .btan{
    position: absolute;
    top: 42%;
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
  font-size: 0.8rem;
  color: #333;
  line-height: 1.2rem;
  text-align: center;
  margin-top: .8rem;
  padding: 0 .4rem;
  }
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
</style>
