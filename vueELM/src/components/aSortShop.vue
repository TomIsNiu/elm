<template>
  <div class="sortshops">
    <div class="header">
      <router-link class="a1" :to="{path:'/adeliciousfood'}"><img src="../assets/Alleftpoint.png" alt=""></router-link>
      <p>{{lastInfo[0]}}</p>
    </div>
    <ul class="firstul">
      <van-dropdown-menu :style="{width:'100%'}" active-color="#3190e8">
        <van-dropdown-item :title=titleName >
          <div class="doubleUl">
            <ul class="foodsul">
              <li class="firstli">
                <span>{{firstInfo[0].name}}</span>
                <span class="span15">{{firstInfo[0].count}}</span>
              </li>
              <li v-for="(v,i) in shopsortInfo" :key="i" @click.native="changeColor(i+1)" :class="{colorCss:i+1}">
                <a href="###" @click.native="index=i">
                  <div class="anextL">
                    <img :src=v.image_url alt="">
                    <span>{{v.name}}</span>
                  </div>
                  <div class="anextR">
                    <span>{{v.count}}</span>  >
                  </div>
                </a>
              </li>
            </ul>
            <ul class="foodsulR" >
              <li v-for="(w,j) in shopsortInfo" :key="j">
                <a href="###">
                  <span>{{w.name}}</span>
                  <span>{{w.count}}</span>
                </a>
              </li>
            </ul>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="排序" />
        <van-dropdown-item title="筛选" />
      </van-dropdown-menu>
    </ul>
    <div class="foods">
      <ul>
        <li v-for="(p,i) in shopListInfo" :key="i">
          <router-link class="a5" :to="{path:'/ashop',query:{id:p.id,latitude:p.latitude,longitude:p.longitude}}">
            <img :src=imgUrl+p.image_path alt="">
            <div class="rights">
              <div class="up">
                <div class="upleft">
                  <span class="pp">品牌</span>
                  <span class="ppname">{{p.name}}</span>
                </div>
                <div class="upright" >
                  <span>{{p.supports[0].icon_name}}</span>
                  <span>{{p.supports[1].icon_name}}</span>
                  <span>票</span>
                </div>
              </div>
              <div class="center">
                <van-rate v-model="p.rating" size="0.5rem" gutter="0.05rem" allow-half  readonly/><span>{{p.rating}}</span><span>月售{{p.recent_order_num}}单</span>
                <div class="centerRight">
                  <span class="fnzs">{{p.delivery_mode.text}}</span>
                  <span class="zsd">{{p.supports[1].name}}</span>
                </div>
                <div class="down">
                  <span>￥{{p.float_minimum_order_amount}}起送 / 配送费约￥{{p.float_delivery_fee}}</span>
                  <span class="time">{{p.order_lead_time}}</span>
                  <span class="jl">{{p.distance}} /</span>
                </div>
              </div>
            </div>
            <div class="qf"></div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: "aSortShop",

      data(){
          return {
            titleName:'',
            index:0,
            lastInfo:[],
            shopListInfo:[],
            imgUrl:"https://elm.cangdu.org/img/",
            shopsortInfo:[],
            firstInfo:[],
            giveInfo:[],
            value1:'0',
          }
      },
      methods:{
        toInfo(i){
          return this.shopsortInfo[i].sub_categories;
        },
      },
      created(){
        this.lastInfo=[this.$route.query.title,this.$route.query.latitude,this.$route.query.longitude],
          this.titleName=this.lastInfo[0];
        this.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=' + this.lastInfo[1] + '&longitude=' + this.lastInfo[2]).then((p)=>{
          this.shopListInfo=p.data;
        })
        //"http://elm.cangdu.org/shopping/v2/restaurant/category?latitude=31.146643&longitude=121.381662"
        this.axios.get('http://elm.cangdu.org/shopping/v2/restaurant/category?latitude=' + this.lastInfo[1] + '&longitude=' + this.lastInfo[2]).then((p)=>{
          this.shopsortInfo=p.data;
          this.firstInfo=this.shopsortInfo.splice(0,1);
          for(let key in this.shopsortInfo){
            this.shopsortInfo[key].sub_categories.splice(0,1);
          }
          //对图片信息做处理
          for(let i=0;i<this.shopsortInfo.length;i++){
            let a=[...this.shopsortInfo[i].image_url];
            let lastpath1="";
            let lastpath2="";
            for(let j=a.length-3;j<a.length;j++){
              lastpath1+=a[j];
            }
            for(let j=a.length-4;j<a.length;j++){
              lastpath2+=a[j];
            }
            this.shopsortInfo[i].image_url='https://fuss10.elemecdn.com/'+a[0]+"/"+a[1]+a[2]+"/";
            for(let j=3;j<a.length;j++){
              this.shopsortInfo[i].image_url=this.shopsortInfo[i].image_url+a[j];
            }
            if(lastpath1=='png'){
              this.shopsortInfo[i].image_url=this.shopsortInfo[i].image_url+".png";
            }else if(lastpath1=='jpeg'){
              this.shopsortInfo[i].image_url=this.shopsortInfo[i].image_url+".jpeg";
            }else{
              this.shopsortInfo[i].image_url='';
            }
          }
        })
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1461051_gb3o5hozhzq.css";
  /*  icon-jiantou*/
  .foodsulR{
    width: 50%;
  }
  .foodsulR>li{
    width: 100%;
    height: 2rem;
  }
  .foodsulR>li>a{
    width: 100%;
    height: 100%;
    line-height: 2rem;
    display: flex;
    justify-content: space-between;
    font-size:0.65rem;
    color: #333;
    padding: 0 0.5rem;
  }
  .doubleUl{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
 .firstli{
   font-size: 0.6rem;
   color: #666;
   padding-left: 0.5rem;
   display: flex;
   justify-content: space-between;
   padding: 0.6rem 0.5rem;
 }
  .foodsul{
    width: 50%;
    margin: 0;
  }
  .foodsul>li{
    width: 100%;
    height: 2rem;
    background: #F1F1F1;
  }
  .foodsul>li>a{
    width: 100%;
    height: 100%;
    padding-left:0.5rem;
    line-height: 2rem;
    display: flex;
    justify-content: space-between;
  }
  .anextL{
    font-size: 0.6rem;
    color: #666;
  }
  .anextL>img{
    display: inline-block;
    width: 1rem;
    height: 1rem;
  }
  .anextR{
    color: rgb(187, 187, 187);
    padding-right: 0.5rem;
  }
  .anextR>span,.span15{
    color: white;
    font-size: 0.6rem;
    background: #ccc;
    padding: 0 0.2rem;
    border-radius: 0.3rem;
  }
  .sortshops{
    width: 100%;
    height: 100%;
  }
  .header{
    width: 100%;
    height: 2.2rem;
    background: #3190E8;
    color: white;
    text-align: center;
    position: fixed;
    top: 0;

  }
  .a1{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0.4rem;
    left: 0.5rem;
  }
  .header>p{
    text-align: center;
    padding-top: 0.5rem;
    margin: 0;
  }
  .a1>img{
    width: 100%;
  }
  .firstul{
    margin-top: 2.2rem;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    background: white;
    padding: 0.35rem 0;
  }
  .firstul>li{
    width: 30%;
    font-size: 0.6rem;
    color: #333;
    text-align: center;
  }
  .foods{
    width: 100%;
    background: white;
    margin-top: 0.7rem;
  }
  .foods>ul{
    width: 100%;
    overflow: hidden;
  }
  .foods>ul>li{
    width: 100%;
    height: 5rem;
    border-bottom: 0.05rem solid #e4e4e4;
  }
  .a5{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .a5>img{
    float: left;
    width: 20%;
    margin: 0.75rem 0 0 0.5rem;
  }
  .rights{
    width: 75%;
    display: inline-block;
    float: left;
    margin:0.5rem 0 0 0.2rem;
  }
  .up{
    width: 100%;
    display: flex;
    justify-content:space-between;
  }
  .pp{
    background: #ffd930;
    color: #333;
    font-size: 0.5rem;
    margin-right: 0.25rem;
    padding: 0 0.1rem;
  }
  .ppname{
    display: inline-block;
    font-size: 0.75rem;
    color: #333;
    padding-top: 0.1rem;
  }
  .upright{
    display: flex;
    flex-direction:row;
    justify-content:flex-end;
    color: #999;
    font-size: 0.6rem;
    padding: 0.1rem 0.05rem;
  }
  .upright>span{

    border: 0.05rem solid #f1f1f1;
    margin-left: 0.05rem;

  }
  .center{
    font-size: 0.5rem;
    color: #333333;
    margin-top: 0.6rem;
  }
  .centerRight{
    display: inline-block;
    float: right;
  }
  .fnzs{
    background: #3190e8;
    border-radius: 0.1rem;
    color: white;
  }
  .zsd{
    color: #3190e8;
    font-size: 0.6rem;
    margin-left: 0.1rem;
    border:0.05rem solid #3190e8;
  }
  .down{
    font-size: 0.6rem;
    margin-top: 0.6rem;
    color: #333333;
  }
  .jl{
    color: #999999;
    float: right;
  }
  .time{
    color: #3190e8;
    float: right;
  }

</style>
