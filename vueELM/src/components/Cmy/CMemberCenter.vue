<template>
    <!--会员中心-->
  <div class="member">
    <mt-header>
      <router-link to="/cdiscounts" slot="left" class="con">
        <img src="../../assets/Cleft.png" alt="" id="Cleft">
        <span id="load">会员中心</span>
      </router-link>
    </mt-header>
    <p class="buy">为账户<span>12345</span>购买会员</p>
    <div class="vip-pre">
      <router-link :to="{path:'/cmembercenter1',query:{naa:this.products.memberContent}}" class="vip-header" >
        <span class="vip-left">会员特权</span>
        <span class="vip-right">会员说明></span></router-link>
      <div class="vip-detail">
        <div class="vip-detail-left">
          <img src="../../assets/Csheng.png" alt="">
        </div>
        <div class="vip-detail-right">
          <h4>减免配送费</h4>
          <p>每月减免30单，每日可减免3单，每单最高减4元</p>
          <p>蜂鸟专送专享</p>
        </div>
      </div>
      <div class="vip-detail">
        <div class="vip-detail-left">
          <img src="../../assets/Csheng.png" alt="">
        </div>
        <div class="vip-detail-right">
          <h4>减免配送费</h4>
          <p>每月减免30单，每日可减免3单，每单最高减4元</p>
          <p>蜂鸟专送专享</p>
        </div>
      </div>
    </div>
    <div class="apply-vip">
      <div class="apply-span">
       <span>开通会员</span>
      </div>
      <div class="apply-buy">
        <div class="apply-buy-left">
          <span class="apply-yi">1个月</span>
          <span class="apply-yuan"> ¥20</span>
        </div>
        <div class="apply-buy-right" @click="change">购买</div>
      </div>
    </div>
    <router-link :to="{path: '/cmembercenter3'}" class="common">
      <span class="common-left">兑换会员</span>
      <span class="common-right">使用卡号卡密></span>
    </router-link>
    <router-link :to="{path: '/cmembercenter4'}" class="common">
      <span class="common-left">购买记录</span>
      <span class="common-right">开发票></span>
    </router-link>
  </div>
</template>

<script>
    export default {
      name: "CMemberCenter",
      data() {
        return {
          products: [],
        }
      },
      created() {
        this.myHttp.get("/v3/profile/explain", (response) => {
          this.products = response;
          console.log(this.products);
        })
      },
      methods: {
        change() {
          this.$router.push({  //核心语句
            path: '/cmembercenter2',   //跳转的路径
          })
        }
      }
    }
</script>

<style scoped>
  .member {
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
  .buy{
    font-size: .8rem;
    color: #666;
    line-height: 2rem;
    padding-left: .7rem;
    margin-bottom: 0;
  }
  .buy span{
    font-weight: 700;
  }
  .vip-pre{
    background-color: #fff;
    padding-left: .7rem;
    margin-bottom: .5rem;
  }
  .vip-header{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    padding-right: .7rem;
  }
  .vip-left{
    font-size: .7rem;
    color: #333;
  }
  .vip-right{
    display: flex;
    align-items: center;
    font-size: .7rem;
    color: #999;
    margin-right: .2rem;
  }
  .vip-detail{
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    padding: .8rem 0;
  }
  .vip-detail-left{
    margin-right: .6rem;
  }
  .vip-detail-left img{
    width: 2rem;
    height: 2.1rem;
  }
  .vip-detail-right h4{
    font-size: .8rem;
    color: #333;
    font-weight: 400;
    margin-bottom: 0;
  }
  .vip-detail-right p {
    font-size: .6rem;
    color: #999;
    margin-bottom: 0;
  }
  .apply-vip{
    background-color: #fff;
    padding-left: .7rem;
    margin-bottom: .5rem;
  }
  .apply-span{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    padding-right: .7rem;
  }
  .apply-span span{
    font-size: .8rem;
    color: #333;
  }
  .apply-buy{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: .7rem;
    font-size: .7rem;
    line-height: 2.6rem;
  }
  .apply-yi{
    font-size: .8rem;
  }
  .apply-yuan{
    font-size: .8rem;
    font-weight: 700;
    color: #f60;
  }
  .apply-buy-right{
    border: .025rem solid #f60;
    border-radius: .2rem;
    line-height: 1.2rem;
    height: 1.2rem;
    width: 2.6rem;
    text-align: center;
    font-size: .6rem;
    color: #f60;
  }
  .common{
    padding: 0 .7rem;
    margin-bottom: .5rem;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
  }
  .common-left{
    font-size: .8rem;
    color: #333;
  }
  .common-right{
    font-size: .8rem;
    color: #999;
    margin-right: .2rem;
  }
</style>
<style>
  h1{
    margin-bottom: 0;
  }
</style>
