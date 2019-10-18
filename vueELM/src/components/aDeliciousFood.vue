<template>
    <div class="div1">
      <router-view></router-view>
      <ul class="bottoms">
        <li><router-link :to="{path:'/adeliciousfood/atakeout',query:{name:lastInfo[0],latitude:lastInfo[1],longitude:lastInfo[2]}}" @click="changeone(0)">
          <i class='iconfont icon-changyonglogo40' style="color:#1296db"></i>
          <p>外卖</p>
        </router-link></li>
        <li><router-link :to="{path:'/adeliciousfood/asearch',query:{x:lastInfo[1],y:lastInfo[2]}}" @click="changeone(1)">
          <i class='iconfont icon-zhizhen-' style="color:#707070"></i>
          <p>搜索</p>
        </router-link></li>
        <li><a href="#" @click="changeone(2)">
          <i class='iconfont icon-dingdan' style="color:#707070"></i>
          <p>订单</p>
        </a></li>
        <li><a href="#" @click="changeone(3)">
          <i class='iconfont icon-wode' style="color:#707070"></i>
          <p>我的</p>
        </a></li>
      </ul>
    </div>
</template>

<script>

    export default {
      name: "aDeliciousFood",
      data(){
        return {
          bottomimgs:["iconfont icon-dingdan-copy","icon-zhizhen","icon-dingdan","iconfont icon-weibiaoti-"],
          lastInfo:[],
          Arrcolor:[]
        }
      },
      methods:{
        changeone(num){

        }
      },
      created(){
        this.lastInfo=[this.$route.query.name,this.$route.query.latitude,this.$route.query.longitude];
        let arr=[];
        if(!localStorage.getItem("history3")){
          //本地history3
          arr.push(this.lastInfo);
          localStorage.setItem("history3",JSON.stringify(arr));
        }else{//有history3
          arr=JSON.parse(localStorage.getItem("history3"));
          arr.splice(0,1);
          localStorage.setItem("history3",JSON.stringify(arr))
          }

      }
    }
</script>

<style scoped>
 @import "//at.alicdn.com/t/font_1458386_a56xsq2yobq.css";
 /* 订单  icon-dingdan*/
 @import "//at.alicdn.com/t/font_1458391_gdd0c3o4ubn.css";
 /* 搜索 icon-zhizhen-*/
 @import "//at.alicdn.com/t/font_1458402_hsnv6u602e.css";
 /* 我的 icon-wode*/
 @import "//at.alicdn.com/t/font_1458410_e5oj2suzhd.css"
 /* 外卖 icon-changyonglogo40  */;
 .div1{
   width: 100%;
   height: 100%;
 }
  .bottoms{
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
    position: fixed;
    bottom:-0.05rem;
    background: white;
  }
  .bottoms>li{
    width: 25%;
  }
  .bottoms>li>a{
    display: inline-block;
    width: 100%;
  }
 .bottoms>li>i{
   font-size: 1rem;
 }
  .bottoms>li>a>p{
    font-size: 0.6rem;
    color: #666666;
  }


</style>
