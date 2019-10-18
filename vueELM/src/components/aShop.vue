<template>
    <div class="div1" :style="{background:'url(' + imgUrl+shopInfo.image_path + ') center top no-repeat / cover'}">
      <div class="header">
        <router-link class="a1" :to="{path:'/adeliciousfood'}">
          <img src="../assets/Alleftpoint.png" alt="" class="img1">
        </router-link>
        <a href="#" class="a2">
          <img :src=imgUrl+shopInfo.image_path alt="" class="img2">
          <div class="headRight">
            <h4>{{shopInfo.name}}</h4>
            <p>商家配送 /分钟送达 /配送费￥{{shopInfo.float_delivery_fee}}</p>
            <p>公告：{{shopInfo.promotion_info}}</p>
          </div>
        </a>
        <a href="#" class="a3">
          <router-link :to="{path:''}"><img src="../assets/Arightpost.png" alt="" class="img3"></router-link>
        </a>
      </div>
      <div class="activity">
        <div class="activity1">
          <span :style="{background: '#'+actInfo[5]}">{{actInfo[0]}}</span>
          {{actInfo[1]}}{{actInfo[3]}}
        </div>
        <div class="activity2">
          <span class="imgup">{{actInfo[2]}}{{actInfo[4]}}</span>
          <img :src="actInfo[6]" alt="" class="img4" >
        </div>
      </div>
      <div class="shopsAndevaluate">
        <router-link :to="{path:'/ashop/ashopfood',query:{id:shopInfo.id}}" @click.native="change1=true" :style="{borderBottom:change1 ? '0.1rem solid #3190e8' : '0.1rem solid white'}">商品</router-link>
        <router-link :to="{path:'/ashop/apingjia',query:{id:shopInfo.id}}" @click.native="change1=false" :style="{borderBottom:change1 ? '0.1rem solid white' : '0.1rem solid #3190e8'}">评价</router-link>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
      name: "aShop",
      data(){
        return {
          change1:true,
          actInfo:['','','','','','rgba(0,0,0,0)',''],
          lastInfo:[],
          shopInfo:[],
          imgUrl:"https://elm.cangdu.org/img/",
        }
      },
      methods:{

      },
      created(){
          this.lastInfo=[this.$route.query.id,this.$route.query.latitude,this.$route.query.longitude];
          this.axios.get("http://elm.cangdu.org/shopping/restaurant/" + this.lastInfo[0] + "?latitude=" + this.lastInfo[1] + "&longitude=" + this.lastInfo[2] + "&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics").then((p)=>{
            this.shopInfo=p.data;
            // console.log(this.shopInfo)
            if(this.shopInfo.activities.length==1){
              this.actInfo[0]=this.shopInfo.activities[0].icon_name;
              this.actInfo[1]=this.shopInfo.activities[0].description;
              this.actInfo[2]=this.shopInfo.activities[0].id;
              this.actInfo[3]="(APP专享)";
              this.actInfo[4]="个活动";
              this.actInfo[5]=this.shopInfo.activities[0].icon_color;
              this.actInfo[6]="../assets/Arightpost.png";
            }
          })
      },
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1460833_wiu5qmiis8c.css";
  .div1{
    width:100%;
    height: 100%;
    overflow: hidden;
  }
  .header{
    width: 100%;
    height: 4.5rem;
    display: flex;
    justify-content:space-between;
  }
  .a1{
    display: inline-block;
    width: 6.25%;
  }
  .img1{
    width: 100%;
    margin: 0.5rem 0 0 0.05rem;
  }
  .a2{
    display: flex;
    justify-content: flex-start;
    width: 87.1%;
  }
  .img2{
    width: 2.92rem;
    height: 2.92rem;
    margin: 0.7rem 0.3rem 0 0;
  }
  .headRight{
    display: inline-block;
    color: white;
    margin-top: 0.7rem;
  }
  .headRight>h4{
    width: 80%;
    height: 1.25rem;
    line-height: 1.25rem;
    font-size: 0.9rem;
    font-weight: 700;
    margin: 0;
  }
  .headRight>p{
    font-size: 0.6rem;
    height: 0.8rem;
    line-height: 0.8rem;
    margin: 0;
  }
  .a3{
    width: 6.25%;
  }
  .img3{
    width: 100%;
    margin: 1.8rem 0.5rem 0 0;
  }
 .activity{
   display: flex;
   justify-content: space-between;
   font-size: 0.6rem;
   height: 0.85rem;
   line-height: 0.85rem;
   color: white;
 }
 .activity1{
   margin-left: 0.45rem;
 }
  .activity1>span{
    padding: 0.1rem 0 0 0.1rem;
  }
 .activity2{
   margin-right: 0.3rem;
 }
  .img4{
    width: 0.85rem;
    height: 0.85rem;
  }
  .imgup{
    vertical-align: 0.2rem;
  }
  .shopsAndevaluate{
    width: 100%;
    padding: 0.35rem 0 0.7rem;
    display: flex;
    justify-content: space-around;
    background: white;
  }
  .shopsAndevaluate>a{
    display: inline-block;
    height: 1.5rem;
    color: #333;
    font-size: 0.65rem;
    line-height: 0.8rem;
    padding:0.3rem 0.15rem;
  }
</style>
