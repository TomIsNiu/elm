<template>
  <div class="sortshops">
    <div class="header">
      <router-link class="a1" :to="{path:'/adeliciousfood'}"><img src="../assets/Alleftpoint.png" alt=""></router-link>
      <p>{{lastInfo[0]}}</p>
    </div>
    <ul class="firstul">
      <van-dropdown-menu :style="{width:'100%'}" active-color="#3190e8">
        <van-dropdown-item :title=titleName @click="isplay=!isplay">
          <div class="doubleUl">
            <ul class="foodsul">
              <li class="firstli">
                <span>{{firstInfo[0].name}}</span>
                <span class="span15">{{firstInfo[0].count}}</span>
              </li>
              <li v-for="(v,i) in shopsortInfo" :key="i" @click.native="changeColor(i+1)" :class="{colorCss:i+1}" @click="isqwert(v.sub_categories)">
                <div @click.native="index=i">
                  <div class="anextL">
                    <img :src=v.image_url alt="">
                    <span>{{v.name}}</span>
                  </div>
                  <div class="anextR">
                    <span>{{v.count}}</span>  >
                  </div>
                </div>
              </li>
            </ul>
            <ul class="foodsulR">
              <li v-for="(w,j) in qwertyui" :key="j" @click="huoqu(w.id)">
                  <span>{{w.name}}</span>
                  <span>{{w.count}}</span>
              </li>
            </ul>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="排序">
          <div class="pxas">
            <li>
              <i class='iconfont icon-renqipaixu' style="color:#9FC4E4"></i>
              <p @click="getinfo(0)">智能排序</p>
            </li>
            <li>
              <i class='iconfont icon-julizuijin' style="color:#44A7D8"></i>
              <p @click="getinfo(5)">距离最近</p>
            </li>
            <li>
              <i class='iconfont icon-hebingxingzhuang' style="color:#F17C7C"></i>
              <p @click="getinfo(6)">销量最高</p>
            </li>
            <li>
              <i class='iconfont icon-jg' style="color:#E6B61A"></i>
              <p @click="getinfo(1)">起送价最低</p>
            </li>
            <li>
              <i class='iconfont icon-shijian' style="color:#37C7B7"></i>
              <p @click="getinfo(2)">配送速度最快</p>
            </li>
            <li>
              <i class='iconfont icon-pingfen' style="color:#F0BD6F"></i>
              <p @click="getinfo(3)">评分最高</p>
            </li>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="筛选">
          <div class="sxas">
            <p>配送方式</p>
            <ul>
              <li @click="ischange(0)">
                <i class='iconfont icon-fengniao' style="color: #3190e8" v-if="changeArr1[0]"></i>
                <span class="span26" v-else="changeArr1[0]">√</span>
                <p :style="{'color':changeArr1[0] ? '#333' : '#3190e8'}">蜂鸟专送</p>
              </li>
            </ul>
            <p>商家属性(可以多选)</p>
            <ul>
              <li @click="ischange(1)">
                <span class="span20" v-if="changeArr1[1]">品</span>
                <span class="span26" v-else="changeArr1[1]">√</span>
                <p :style="{'color':changeArr1[1] ? '#333' : '#3190e8'}">品牌商家</p>
              </li>
              <li @click="ischange(2)">
                <span class="span21" v-if="changeArr1[2]">保</span>
                <span class="span26" v-else="changeArr1[2]">√</span>
                <p :style="{'color':changeArr1[2] ? '#333' : '#3190e8'}">外卖保</p>
              </li>
              <li @click="ischange(3)">
                <span class="span22" v-if="changeArr1[3]">准</span>
                <span class="span26" v-else="changeArr1[3]">√</span>
                <p :style="{'color':changeArr1[3] ? '#333' : '#3190e8'}">准时达</p>
              </li>
              <li @click="ischange(4)">
                <span class="span23" v-if="changeArr1[4]">新</span>
                <span class="span26" v-else="changeArr1[4]">√</span>
                <p :style="{'color':changeArr1[4] ? '#333' : '#3190e8'}">新店</p>
              </li>
              <li @click="ischange(5)">
                <span class="span24" v-if="changeArr1[5]">付</span>
                <span class="span26" v-else="changeArr1[5]">√</span>
                <p :style="{'color':changeArr1[5] ? '#333' : '#3190e8'}">在线支付</p>
              </li>
              <li @click="ischange(6)">
                <span class="span25" v-if="changeArr1[6]">票</span>
                <span class="span26" v-else="changeArr1[6]">√</span>
                <p :style="{'color':changeArr1[6] ? '#333' : '#3190e8'}">开发票</p>
              </li>
            </ul>
            <div class="sxasbottom">
              <button class="button1" @click="deleteAll">清空</button>
              <button class="button2" @click="diffsearch">确认{{funnumber()}}</button>
            </div>
          </div>
        </van-dropdown-item>
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
            changeArr1:[true,true,true,true,true,true,true],
            titleName:'',
            index:0,
            lastInfo:[],
            qwertyui:[],
            shopListInfo:[],
            imgUrl:"https://elm.cangdu.org/img/",
            shopsortInfo:[],
            firstInfo:[],
            giveInfo:[],
            value1:'0',
          }
      },
      methods:{
        huoqu(id){
          console.log(this.isplay)
          this.axios.get("http://elm.cangdu.org/shopping/restaurants?latitude=" + this.lastInfo[1] + "&longitude=" + this.lastInfo[2] + "&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=" + id +"&order_by=null&delivery_mode[]=null").then((p)=>{
            this.shopListInfo=p.data;
          })
        },
        isqwert(Arr){
          this.qwertyui=Arr;
        },
        diffsearch(){
          let Arr1=[1,8,7,9,5,3,4];
          let Arr2=[];
          let path="http://elm.cangdu.org/shopping/restaurants?latitude="+this.lastInfo[1]+"&longitude="+this.lastInfo[2]+"&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=null";
          for(let i=0;i<this.changeArr1.length;i++){
            if(this.changeArr1[i]==false){
              Arr2.push(Arr1[i]);
            }
          }
          if(Arr2.length==1){
            if(Arr2[0]==1){
              path=path+"&delivery_mode[]=1";
            }else{
              path=path+"&delivery_mode[]=null&support_ids[]="+Arr2[0];
            }
          }else {
            if(Arr2[0]==1){
              path=path+"&delivery_mode[]=1";
              for(let j=1;j<Arr2.length;j++){
                path=path+"&support_ids[]="+Arr2[j];
              }
            }else{
              for(let j=0;j<Arr2.length;j++){
                path=path+"&support_ids[]="+Arr2[j];
              }
            }
          }
          this.axios.get(path).then((p)=>{
            this.shopListInfo=p.data;
          })
        },
        deleteAll(){
          this.changeArr1=[true,true,true,true,true,true,true];
        },
        funnumber(){
          let num=0;
          for(let i=0 ;i<this.changeArr1.length;i++){
            if(this.changeArr1[i]==false){
              num++;
            }
          }
          if(num==0){
            return '';
          }else{
            return '( '+num+' )';
          }
        },
        ischange(num){
          this.changeArr1[num]=!this.changeArr1[num];
          this.changeArr1=[...this.changeArr1];
        },
        toInfo(i){
          return this.shopsortInfo[i].sub_categories;
        },
        getinfo(id){
            this.axios.get("http://elm.cangdu.org/shopping/restaurants?latitude="+this.lastInfo[1]+"&longitude="+this.lastInfo[2]+"&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=" + id + "&delivery_mode[]=null&support_ids[]=4").then((p)=>{
              this.shopListInfo=p.data;
              console.log(this.shopListInfo);
            })
        }
      },
      created(){
        this.lastInfo=[this.$route.query.title,this.$route.query.latitude,this.$route.query.longitude],
          this.titleName=this.lastInfo[0];
        this.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=' + this.lastInfo[1] + '&longitude=' + this.lastInfo[2]).then((p)=>{
          this.shopListInfo=p.data;
          console.log(this.shopListInfo)
        })
        //"http://elm.cangdu.org/shopping/v2/restaurant/category?latitude=31.146643&longitude=121.381662"
        this.axios.get('http://elm.cangdu.org/shopping/v2/restaurant/category?latitude=' + this.lastInfo[1] + '&longitude=' + this.lastInfo[2]).then((p)=>{
          this.shopsortInfo=p.data;
          console.log(this.shopsortInfo)
          this.firstInfo=this.shopsortInfo.splice(0,1);
          console.log(this.firstInfo);
          for(let key in this.shopsortInfo){
            this.shopsortInfo[key].sub_categories.splice(0,1);
          }
          this.qwertyui=this.firstInfo[0].sub_categories;
          console.log(this.qwertyui);
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
  @import "//at.alicdn.com/t/font_1466325_l6l6is31pk.css";
  /* 蜂鸟 icon-fengniao */
  @import "//at.alicdn.com/t/font_1461051_gb3o5hozhzq.css";
  /* 返回箭头  icon-jiantou*/
  @import "//at.alicdn.com/t/font_1466067_p9mmv39dhfj.css";
  /* 智能排序  icon-renqipaixu*/
  @import "//at.alicdn.com/t/font_1466068_azb7almpp2l.css";
  /* 距离最近 icon-julizuijin*/
  @import "//at.alicdn.com/t/font_1466071_n7o3grur8v.css";
  /* 销量最高 icon-hebingxingzhuang */
  @import "//at.alicdn.com/t/font_1466072_lbgtjp768bh.css";
  /* 起送价最低  icon-jg*/
  @import "//at.alicdn.com/t/font_1466074_4bww3y96zq5.css";
  /* 配送速度最快 icon-shijian */
  @import "//at.alicdn.com/t/font_1466075_2h85xum83zs.css";
  /* 评分最高 icon-pingfen */
  .sxas>ul>li>i{
    width: 0.9rem;
    height: 0.9rem;
    margin-right: 0.25rem;
  }
  .sxas>ul>li>p{
    display: inline-block;
    position: absolute;
    top: 0;
    left: 1.3rem;
  }
  .span26{
    width: 0.9rem;
    height: 0.9rem;
    margin-right: 0.25rem;
    font-size: 1rem;
    color: #3190e8;
  }
  .sxasbottom{
    width: 100%;
    padding: 0.5rem;
    background: #F1F1F1;
    font-size: 0.9rem;
    display: flex;
    justify-content: space-around;
  }
  .button1{
    width: 45%;
    height: 2rem;
    line-height: 2rem;
    color: #333;
    background: white;
    border:0.05rem solid white;
    border-radius: 0.2rem;
    margin-right: 0.6rem;
  }
  .button2{
    width: 45%;
    height: 2rem;
    line-height: 2rem;
    color: white;
    background: #56D176;
    border:0.05rem solid #56D176;
    border-radius: 0.2rem;
    margin-right: 0.6rem;
  }
  .span20{
    color: #3f8de6;
    width: 0.9rem;
    height: 0.9rem;
    border: 0.05rem solid #3f8de6;
    padding: 0 0.1rem;
    border-radius: 0.15rem;
    margin-right: 0.25rem;
  }
  .span21{
    color: #AAAAAA;
    width: 0.9rem;
    height: 0.9rem;
    border: 0.05rem solid #AAAAAA;
    padding: 0 0.1rem;
    border-radius: 0.15rem;
    margin-right: 0.25rem;
  }
  .span22{
    color: #73B7FF;
    width: 0.9rem;
    height: 0.9rem;
    border: 0.05rem solid #73B7FF;
    padding: 0 0.1rem;
    border-radius: 0.15rem;
    margin-right: 0.25rem;
  }
  .span23{
    color: #EB964C;
    width: 0.9rem;
    height: 0.9rem;
    border: 0.05rem solid #EB964C;
    padding: 0 0.1rem;
    border-radius: 0.15rem;
    margin-right: 0.25rem;
  }
  .span24{
    color: #FF6724;
    width: 0.9rem;
    height: 0.9rem;
    border: 0.05rem solid #FF6724;
    padding: 0 0.1rem;
    border-radius: 0.15rem;
    margin-right: 0.25rem;
  }
  .span25{
    color: #A8A8A8;
    width: 0.9rem;
    height: 0.9rem;
    border: 0.05rem solid #A8A8A8;
    padding: 0 0.1rem;
    border-radius: 0.15rem;
    margin-right: 0.25rem;
  }
  .sxas{
    width:100%;
    background: white;
  }
  .sxas>p{
    width:100%;
    height: 1.7rem;
    line-height: 1.7rem;
    font-size: 0.6rem;
    color: #333;
    padding-left: 0.6rem;
    margin:0;
  }
  .sxas>ul{
    width: 100%;
    padding-left: 0.6rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    border-bottom: 0.05rem solid #FBFBFB;
  }
  .sxas>ul>li{
    width: 30%;
    height: 1.6rem;
    line-height: 1.6rem;
    font-size: 0.6rem;
    color: #333;
    padding: 0 0.25rem;
    margin:0 0.3rem 0.3rem 0;
    border: 0.05rem solid #F1F1F1;
    border-radius: 0.2rem;
    position: relative;
  }
  .pxas{
    width: 100%;
  }
  .pxas>li{
    height: 2.9rem;
    display: flex;
    justify-content: flex-start;
    line-height: 2.9rem;
    font-size: 0.65rem;
    color: #333;
  }
  .pxas>li>i{
    width: 15%;
    box-sizing: border-box;
    padding-left:1.5rem;
  }
  .pxas>li>p{
    width: 85%;
    height: 2.9rem;
    border-bottom: 0.1rem solid #e4e4e4;
  }
  .foodsulR{
    width: 50%;
  }
  .foodsulR>li{
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    display: flex;
    justify-content: space-between;
    font-size:0.65rem;
    color: #333;
    padding: 0 0.5rem;
  }
  .doubleUl{
    width: 100%;
    height: 18.5rem;
    display: flex;
    justify-content: space-between;
    overflow: auto;
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
  .foodsul>li>div{
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
    z-index: 5;
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
    margin-top: 0.3rem;
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
    font-size: 0.3rem;
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
