<template>
  <!--我的余额-->
    <div id="balance">
      <mt-header>
        <router-link to="/bMine" slot="left" class="con">
          <img src="../../assets/Cleft.png" alt="" id="Cleft">
          <span id="load">我的余额</span>
        </router-link>
      </mt-header>
      <div id="dang">
        <div id="current">
          <div id="Dcurrent">
            <span id="qian">当前余额</span>
            <p id="con">
              <img src="../../assets/Cwen.png" alt="" id="Cwen">
              <router-link :to="{path:'/cbalance2',query:{name:this.products.balanceCaption,con:this.products.balanceContent}}">余额说明</router-link>
            </p>
          </div>
          <p>
          <span id="ling">0.00</span>
          <span>元</span>
        </p>
          <mt-button type="default" id="tixian" >提现</mt-button>
        </div>
      </div> 
      <p id="detail">交易明细</p>
      <div id="Cdetail">
        <img src="../../assets/Cdetail.png" alt="">
        <p>暂无明细记录</p>
    </div>
    </div>

</template>

<script>
    export default {
        name: "Cbalance",
      data() {
        return {
          products: [],
        }
        },
      created(){
          this.myHttp.get("/v3/profile/explain",(response)=>{
          this.products = response;
          console.log(this.products.balanceCaption);
        })
      }
    }
</script>

<style scoped>
  #balance {
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
    /*padding-top: 1rem;*/
  }

  #load {
    width: 15rem;
    font-size: 1rem;
    color: white;
    line-height: 1.5rem;
    text-align: center;
  }
  /*当前余额*/
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
    background-color: #ccc;
  }
  /*交易明细*/
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
</style>
<style>
  h1{
    margin-bottom: 0;
  }
</style>
