<template>
  <div>
    <div class="confirm">
      <div class="head-top">
  <router-link :to="{path: '/ashop/ashopfood'}">
  <img src="../../assets/Cleft.png" alt="" class="go-back">
  </router-link>
  <router-link :to="{path:'/'}" class="deng">登录|注册<!--<i class="iconfont icon-touxiang1-copy"></i> 登录 注册--></router-link>
  <div class="title-head">确认订单</div>
</div>
      <router-link :to="{path:'/bPath'}" class="address-container">
        <div class="address-empty-left">
          <i class="iconfont icon-location"></i>
          <div class="address">请添加一个收货地址</div>
        </div>
        <span class="address-empty-right">></span>
      </router-link>
      <div class="delivery_model">
        <p class="delivery_text">送达时间</p>
        <div class="delivery_time">
          <p>尽快送达 | 预计 08:51</p>
          <p>蜂鸟专送</p>
        </div>
      </div>
      <div class="pay-way">
        <div class="header-style">
          <span>支付方式</span>
          <div class="more-type">
            <!--<span>在线支付</span>-->
            <van-cell is-link @click="showPopup">在线支付</van-cell>
            <van-popup v-model="show" position="bottom" :style="{ height: '30%'}"  >
              <p class="choose">支付方式</p>
              <ul>
                <li>
                  <span>
                    货到付款(商家不支持货到付款)
                  </span>
                  <van-radio-group v-model="radio" disabled>
                    <van-radio name="1"></van-radio>
                  </van-radio-group>
                </li>
                <li>
                  <span style="text-align: left;margin-left: 0.3rem" >在线支付</span>
                  <van-radio-group v-model="radio">
                    <van-radio name="1" checked-color="#07c160"></van-radio>
                  </van-radio-group>
                </li>
              </ul>
            </van-popup>
          </div>
        </div>
        <div class="hongbao">
          <span>红包</span>
          <span>暂时只在饿了么 APP 中支持</span>
        </div>
      </div>
      <div class="food-list">
        <div class="header">
          <img src="../../assets/Cma.jpg" alt="">
          <span>北京烤鸭</span>
        </div>
        <ul>
          <li class="food-item">
            <p class="food-name">123</p>
            <div class="num-price">
              <span>x1</span>
              <span>¥20</span>
            </div>
          </li>
        </ul>
        <div class="food-item">
          <p class="food-name">餐盒</p>
          <div class="num-price">
            <span></span>
            <span>¥ 10919</span>
          </div>
        </div>
        <div class="food-item">
          <p class="food-name">配送费</p>
          <div class="num-price">
            <span></span>
            <span>¥ 4</span>
          </div>
        </div>
        <div class="food-item">
          <p class="food-name">订单 ¥10943</p>
          <div class="num-price">
            <span>待支付<br/> ¥10943</span>
          </div>
        </div>

      </div>
      <div class="pay-way">
        <router-link :to="{path:'/cordercomment'}" class="header-style">
          <span >订单备注</span>
          <div class="ellpies">
            <!--<span v-for="(item, i) in con">{{item}}</span>-->
            <span v-for="(item ,i) in con " class="more-type">
              <span v-for="(v,i1) in item" :key="i1">{{v}}</span>
            </span>
            <span> ></span>
          </div>
        </router-link>
        <router-link :to="{path:'/cinvoice'}" class="hongbao header-style" >
          <span>发票抬头</span>
          <span>{{pro}}></span>
        </router-link>
      </div>
      <div class="confrim_order">
      <p>待支付 <span> ¥11352</span></p>
      <p @click="sss">确认下单</p>
      </div>
    </div>
  </div>

</template>

<script>

    export default {
        name: "Cconfirm",
      data() {
        return {
          show: false,
          radio: '1',
          con:"",
          pro:""
        }
      },

      methods: {
        showPopup() {
          this.show = true;
        },
        sss(){
          this.$router.push({path:'/bDing'})
        }
      },
      created(){
          if (this.$route.params.cun != null) {
            this.con = JSON.parse(this.$route.params.cun)+this.$route.params.haha,
              console.log(this.con);
          }else {
            this.con="口味,偏好等"
          }
          if (this.$route.query.name!=null){
            this.pro=this.$route.query.name;
            console.log(this.pro);
          } else{
            this.pro="不需要发票"
          }

          }

    }
</script>

<style scoped>
  /*@import "//at.alicdn.com/t/font_1458274_d70gdvfltgq.css";*/
  @import "//at.alicdn.com/t/font_1458274_8nuqsnnimz2.css";
  .confirm{
    padding-top: 1.95rem;
    padding-bottom: 3rem;
    position: relative;
  }
  .head-top{
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
  }
  .go-back{
    width:1.8rem;
    height: 1.8rem;
    margin-left: .4rem;
  }
  .deng{
    right: .55rem;
    color: #fff;
    font-size: 0.8rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .title-head{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 700;
  }
  .address-container{
    min-height: 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .6rem;
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAGCAYAAACMyr1NAAAAAXNSR0IArs4c6QAAANxJREFUOBFjZICCpoUPWhn+M7rD+OTQjP8ZztQmymfg0/tr95JlDAz/I/GpISTHyMiwj9Ul1hmbOiaQYNfSx6qUegZkDisD01QQjQv837NMD+iYCFzyxIr/Z2asxqWWBSTx49e/LAZGXEqIFP/PcLgiUfYyPtV/GP62/P9PmU3AANnM6hhzApc9TB3zH+sCrbDFpYBYcQ42pmn41P7av8QC6BlffGoIyTEyMv5nYWCuwaeO6TfDv2x8CoiSY/y/syxa9jY+tYx//7fikydGDhggKxhdoi4Ro3bYqAEAknE5DXYMR0IAAAAASUVORK5CYII=) 0 100% repeat-x;
    background-color: #fff;
    background-size: auto .12rem;
  }
  .address-empty-left{
    display: flex;
    align-items: center;
  }
  .icon-location{
    width: .8rem;
    height: .7rem;
    margin-right: .2rem;
  }
  .address{
    font-size: .75rem;
    color: #333;
  }
  .address-empty-right{
    width:1rem;
    color: #999;
  }
  .delivery_model{
    border-left: .2rem solid #3190e8;
    min-height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    margin-top: .4rem;
    padding: 0 .7rem;
  }
  .delivery_text {
    font-size: .9rem;
    color: #333;
    font-weight: 700;
    padding-left: .3rem;
    margin-bottom: 0;
  }
  .delivery_time{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .delivery_time p:first-of-type{
    font-size: .7rem;
    color: #3190e8;
    margin-bottom: 0;
  }
  .delivery_time p:nth-of-type(2){
    font-size: .5rem;
    color: #fff;
    background-color: #3190e8;
    width: 2.6rem;
    margin-top: .5rem;
    text-align: center;
    border-radius: .12rem;
    padding: .1rem;
    margin-bottom: 0;
  }
  .pay-way{
    background-color: #fff;
    margin-top: .4rem;
    padding: 0 .7rem;
  }
  .header-style{
    display: flex;
    justify-content: space-between;
    line-height: 2rem;
  }
  .header-style span{
    font-size: .8rem;
    color: #666;
  }
  .more-type span{
    font-size: .7rem;
    color: #aaa;
    display: inline-block;
    text-align: right;
    vertical-align: middle;
  }
  .more_right{
    width: .5rem;
    height: .5rem;
    color: #ccc;
  }
  .hongbao{
    display: flex;
    justify-content: space-between;
    border-top: .025rem solid #f5f5f5;
  }
  .hongbao span{
    font-size: .7rem;
    color: #aaa;
    line-height: 2rem;
  }
  .food-list{
    background-color: #fff;
    margin-top: .4rem;
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
  .ellpies span{
    font-size: .7rem;
    color: #aaa;
    display: inline-block;
    text-align: right;
    vertical-align: middle;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .confrim_order{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2rem;
  }
  .confrim_order p:first-of-type{
    background-color: #3c3c3c;
    width: 100%;
    height: 100%;
    flex: 5;
    padding-left: .7rem;
    line-height: 2rem;
    font-size: .85rem;
    color: #fff;
  }
  .confrim_order p:nth-of-type(2){
    width: 100%;
    height: 100%;
    flex: 2;
    background-color: #56d176;
    text-align: center;
    line-height: 2rem;
    font-size: .75rem;
    color: #fff;
  }
  .choose{
    background-color: #fafafa;
    font-size: .8rem;
    color: #333;
    text-align: center;
    line-height: 2rem;
    margin-bottom: 0;
  }
  ul li{
    display: flex;
    justify-content: space-between;
    padding: 0 .7rem;
    line-height: 2.5rem;
    align-items: center;
  }
  ul li span {
    font-size: .7rem;
    color: #ccc;
  }
</style>

