<template>
    <div id="bbb">
      <div id="bb">
        <router-link :to="{path:'/'}" id="b1"> < </router-link>
        <span id="b2">我的</span>
      </div>
     <router-link :to="{path:bb}" id="b3">
       <img src="../assets/touxiang.png" alt=""  style="width: 3rem; margin-top: 1rem;margin-left: 0.2rem">
       <span id="bz">{{user}}</span>
       <span id="bs"><img src="../assets/phone.png" alt="" style="width: 1.2rem; margin-top: 2.7rem"><span>暂无绑定手机号</span></span>
       <span id="by"> > </span>
     </router-link>
      <div style="background-color: white">
        <ul class="bclear">
          <router-link :to="{path:'/cbalance'}"><li class="bli">
            <span class="bwei"><span class="bnumber1">0.00</span>分</span>
            <span class="bxia">我的余额</span>
          </li></router-link>
          <router-link :to="{path:'/cdiscounts',query:{number:this.zz}}"><li class="bli">
            <span class="bwei"><span class="bnumber2">{{hong}}</span>个</span>
            <span class="bxia">我的优惠</span>
          </li></router-link>
          <router-link :to="{path:'/jifen'}"><li class="bli blis">
            <span class="bwei"><span class="bnumber3">0</span>分</span>
            <span class="bxia">我的积分</span>
          </li></router-link>
        </ul>
      </div>
      <div class="bding">
        <ul>
          <li class="bzz">
           <router-link :to="{path:'/'}">
             <i class="iconfont icon-dingdan" style="color: #666;font-size: 1rem"></i>
             <span style="font-size: 0.9rem">我的订单</span>
             <span class="byou"> > </span>
           </router-link>
          </li>
          <li class="bzz">
            <router-link :to="{path:'/cintegral'}">
              <i class="iconfont icon-shangchang1" style="color: orange ;font-size: 0.7rem"></i>
              <span style="font-size: 0.9rem">积分商城</span>
              <span class="byou"> > </span>
            </router-link>
          </li>
          <li class="bzz">
            <router-link :to="{path:'/cmembercenter'}">
              <i class="iconfont icon-huangguan" style="color: orange;font-size: 0.9rem"></i>
              <span style="font-size: 0.9rem">饿了么会员卡</span>
              <span class="byou"> > </span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="bding">
        <ul>
          <li class="bzz">
            <router-link :to="{path:'/cserver'}">
              <i class="iconfont icon-fu_wu_zhong_xin" style="color: #666;font-size: 0.8rem"></i>
              <span style="font-size: 0.9rem">服务中心</span>
              <span class="byou"> > </span>
            </router-link>
          </li>
          <li class="bzz">
            <router-link :to="{path:'/cele'}">
              <i class="iconfont icon-eliaomo" style="color: orange;font-size: 0.8rem"></i>
              <span style="font-size: 0.9rem">下载饿了么APP</span>
              <span class="byou"> > </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "bMine",
      data(){
          return{
            bb:'/bDeng',
            user:'登陆/注册',
            pp:'',
            username:'',
            hong:3,
            zz:'',
          }
      },
      methods:{

      },
      created(){
          this.axios.get('https://elm.cangdu.org/v1/user').then((person)=>{
            console.log(person.data);
            if(person.data.status!=0){
              this.user=person.data.username;
              this.hong=person.data.gift_amount;
              this.bb='/bAccount';
              this.zz=1;
            }else {
              this.user='登陆/注册';
              this.hong=0;
              this.bb='/bDeng'
            }

          })
      }

    }
</script>
<style scoped>
  @import "//at.alicdn.com/t/font_1453346_l5qx7kfgl0j.css";
  @import "//at.alicdn.com/t/font_1453346_w1k1r80pqvm.css";
  @import "//at.alicdn.com/t/font_1453346_6wcdrblxoee.css";
  @import "//at.alicdn.com/t/font_1453346_307yuunxmuy.css";
  @import "//at.alicdn.com/t/font_1453346_aueo7koczlj.css";
  a{
    text-decoration: none;
    color: #666;
  }
  i{
    font-size: 1.3rem;
  }
  #b1{
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
  }
  #bb{
  margin: 0;
  padding: 0;
  background-color: dodgerblue;
  height: 2.2rem;
  position: relative;

}
  #b2{
    color: white;
    font-size: 1.2rem;
   position: absolute;
    left: 8rem;
    top: 0.5rem;
  }
  #b3{
    text-decoration: none;
    background-color: dodgerblue;
    display: block;
    height: 5rem;
    position: relative;
    color: white;
    overflow: hidden;
  }
  #bz{
    font-size: 0.9rem;
    position: absolute;
    left: 3.5rem;
    top: 1.2rem;
  }
  #bs{
    font-size: 0.7rem;
    /*position: relative;*/
  }
  #bs span{
position: absolute;
    top: 2.9rem;
  }
  #by{
    font-size: 1.5rem;
    margin-top: 1rem;
    float: right;
  }
  .bclear{
    overflow: hidden;
    text-align: center;
    width: 100%;
    background-color:white;
  }
  .bxia{
    font-size: 0.8rem;
    color: #666;
  }
  .bli{
    float: left;
    width: 33%;
    border-right: 0.06rem solid #999;
    color: #999;

  }
  .blis{
    border-right:0;
  }
  .bwei{
    font-size: 0.7rem;
    display: inline-block;
  }
  .bnumber1, .bnumber2, .bnumber3{
    font-size: 1.5rem;
    font-weight: 600;
  }
  .bnumber1{
    color: orange;
  }
  .bnumber2{
    color: red;
  }
  .bnumber3{
    color:lawngreen;
  }
  .bxia{
    display: block;
    padding-bottom: 0.3rem;
  }
  .bding{
    margin-top: 0.5rem;
    background-color: white;
  }
  .bzz{
    border-bottom: 0.01rem solid #e4e4e4;
    padding: 0.5rem;
    overflow: hidden;
    font-size: 0.9rem;
  }
  .byou{
    float: right;
  }

</style>
