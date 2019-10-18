<template>
    <div class="shopfoods">
      <div class="one">
        <!--左边商品分类榜-->
        <van-sidebar v-model="value" class="shopfoodsleft">
          <van-sidebar-item v-for="(p,i) in foodsInfo" :key="i" :title=p.name :href="'#a'+i" />
        </van-sidebar>
      </div>
      <!--右边具体商品显示-->
      <div class="ashopfoodright">
        <ul v-for="(m,j) in foodsInfo" :key="j" class="uls" :id="'a'+j">
          <!--商品的分类///热销榜-->
          <p><span class="rxb">{{m.name}}</span> {{m.description}}<button>...</button></p>
          <li v-for="(n,k) in m.foods" :key="k">
            <!--具体商品的展示-->
            <div class="foodsup">
              <img :src=imgUrl+n.image_path alt="">
              <div class="imgR">
                <p class="p1">{{n.name}}</p>
                <p class="p2">{{n.description}}</p>
                <p class="p3">月售{{111}}份  好评{{n.satisfy_rate}}%</p>
              </div>
            </div>
            <div class="foodsdown">
              <div>
                <span class="money2">￥</span><span class="money3">{{n.specfoods[0].price}}</span>  起
              </div>
              <div class="addandreduce">
                <div class="hidePart" v-show="isnumber(n.name)>0">
                  <!--添加入购物车-->
                  <div class="reducefood1" @click="reducefoodtocart(n.name)">
                    <i class='iconfont icon-sub' style="color:#3190e8"></i>
                  </div>
                  <span>{{isnumber(n.name)}}</span>
                </div>
                <!--移出购物车-->
                <div class="addfood1" @click="addfoodtocart(n.name,n.specfoods[0].price)">
                  <i class='iconfont icon-jiahao' style="color:white"></i>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--购物车-->
      <div class="iscartinfo" v-show="change2">
        <div class="iscartinfotop">
          <span>购物车</span>
          <span><i class='iconfont icon-shanchu1' style="color:#BBBBBB"></i> 清空</span>
        </div>
        <ul>
          <li v-for="(a,b) in cartInfo" :key="b">
            <span>{{a[0]}}</span>
            <div class="everfoods">
              <span>￥{{a[1]}}</span>
              <div class="addandreduce1">
                <div class="reducefood1" @click="reducefoodtocart(a[0])">
                  <i class='iconfont icon-sub' style="color:#3190e8"></i>
                </div>
                <span>{{isnumber(a[0])}}</span>
                <div class="addfood1" @click="addfoodtocart(a[0],a[1])">
                  <i class='iconfont icon-jiahao' style="color:white"></i>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--底边购物车栏-->
      <div class="shopdown">
        <ul>
          <li class="shopdown1">
            <!--购物车图标-->
            <div class="shopdown11" :style="{background:cartInfo.length==0?'#3D3D3F':'#3190e8'}" @click="ifcolor(cartInfo.length)">
              <i class='iconfont icon-htmal5icon29'style="color:white"></i>
            </div>
            <!--购物车内的价格-->
            <div class="shopdown12">
              <p>￥  {{price[0]}}</p>
              <p class="p10">配送费￥5</p>
            </div>
          </li>
          <!--起送价结算-->
          <li class="shopdown3"><button :style="{background:cartInfo.length==0?'#535356':'#4CD964'}" @click="gotoSettlement">{{cartInfo.length==0?'还差20元起送':'去结算'}}</button></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "aShopFood",
      data(){
        return{
          cartInfo:[],
          change1:false,
          change2:false,
          value:'0',
          id:0,
          foodsInfo:[],
          imgUrl:"https://elm.cangdu.org/img/",
          price:[0],
        }
      },
      created(){
        this.id=this.$route.query.id;
        this.axios.get("http://elm.cangdu.org/shopping/v2/menu?restaurant_id="+ this.id).then((p)=>{
          this.foodsInfo=p.data;
          // console.log(this.foodsInfo);
        })
      },
      methods:{
        //去结算
        gotoSettlement(){
          // if(this.cartInfo.length>0){
          //   this.$route.push({path:'/'})
          // }
        },
        //计算价格
        mycartprice(){
          console.log(this.price)
          let price=0;
          if(this.cartInfo.length==0){
            price=0;
          }else {
            for(let i=0;i<this.cartInfo.length;i++){
              price+=(this.cartInfo[i][1]+0)*(this.cartInfo[i][2]+0);
              console.log(price);
            }
          }
          this.price.splice(0,1);
          this.price.push(price);
        },
        //购物车内容是否要展示
        ifcolor(num){
          if(num!=0){
            this.change2=!this.change2;
          }
        },
        //每个食物类别加入购物车的数量
        isnumber(name){
          if(this.cartInfo.length==0){
            return 0;
          }else {
            let num=0;
            for(let i=0;i<this.cartInfo.length;i++){
              if(name==this.cartInfo[i][0]){
                return this.cartInfo[i][2];
              }else {
                num++;
              }
            }
            if(num==this.cartInfo.length){
              return 0;
            }
          }
        },
        //将某个食物加入购物车
        addfoodtocart(name,price){
          this.change1=true;
          this.number++;
          if(this.cartInfo.length==0){
            this.cartInfo.push([name,price,1]);
            this.mycartprice();
          }else{
            let num=0;
            let index;
            for(let i=0;i<this.cartInfo.length;i++){
              if(this.cartInfo[i][0]!=name){
                num++;
              }else {
                index=i
              }
            }
            if(num==this.cartInfo.length){
              this.cartInfo.push([name,price,1])
              this.mycartprice();
            }else{
              this.cartInfo[index][2]++;
              this.cartInfo=[...this.cartInfo];
              this.mycartprice();
            }
          }
        },
        //将某个食物移出购物车
        reducefoodtocart(name){
          for(let i=0;i<this.cartInfo.length;i++){
            if(name==this.cartInfo[i][0]){
              this.cartInfo[i][2]--;
              this.cartInfo=[...this.cartInfo]
              if(this.cartInfo[i][2]==0){
                this.change1=false;
              }
            }
          }
          for(let i=0;i<this.cartInfo.length;i++){
            if(this.cartInfo[i][2]==0){
              this.cartInfo.splice(i,1);
              i--;
            }
          }
          if(this.cartInfo.length==0){
            this.change2=false;
          }
          this.mycartprice();
        }
      },
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1465008_c6xx39jm8i7.css";
  /* 删除 icon-shanchu1 */
  @import "//at.alicdn.com/t/font_1464514_dfgqoho6nqk.css";
  /* 加号 icon-jiahao */
  @import "//at.alicdn.com/t/font_1464520_xfimf1b8i7b.css";
  /* 减号 icon-sub */
  .bluecolor{
    background: #31908e;
  }
  .imgR{
    width: 100%;
  }
  .addandreduce1{
    display: flex;
    justify-content: flex-end;
    padding: 0;
  }
  .addandreduce1>span{
    margin-top: 0.1rem;
  }
  .everfoods{
    width: 35%;
    display: flex;
    justify-content: space-between;
  }
  .iscartinfo>ul{
    width: 100%;
    background: white;
  }
  .iscartinfo>ul>li{
    width: 100%;
    padding: 0.5rem;
    font-size: 0.7rem;
    display: flex;
    justify-content: space-between;
  }
  .iscartinfo{
    width: 100%;
    position: fixed;
    bottom: 2rem;
  }
  .iscartinfotop{
    width: 100%;
    font-size: 0.7rem;
    background: #eceff1;
    padding: 0.5rem;
    color: #333;
    display: flex;
    justify-content: space-between;
    }
  .reducefood1{
    display: inline-block;
    height: 0.9rem;
    margin:0.3rem 0.3rem 0;
    line-height: 0.8rem;
    border: 0.05rem solid #3190e8;
    border-radius: 0.5rem;
  }
  .addandreduce{
    display: flex;
    justify-content: flex-end;
  }
  .hidePart{
    display: flex;
    justify-content: flex-end;
  }
  .hidePart>span{
    margin-top: 0.3rem;
  }

  .one{
    width: 25%;
  }
  .foodsdown{
    width: 80%;
    margin-left: 3rem;
    display: flex;
    justify-content: space-between;
  }
  .foodsdown>div{
    font-size: 0.6rem;
    color: #666;
  }
  .money2{
    color: #ff6600;
  }
  .money3{
    color: #ff6600;
    font-size: 0.8rem;
  }
  .addfood1{
    display: inline-block;
    height: 0.9rem;
    margin:0.3rem 0.3rem 0;
    line-height: 0.8rem;
    background: #3190e8;
    border-radius: 0.5rem;
    border: 0.05rem solid #3190e8;
  }
  .foodsup{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .foodsup>img{
    width: 20%;
    height: 2.5rem;
  }
  .foodsup>div{
    width: 80%;
    padding-left:0.5rem;
  }
  .foodsup>div>p{
    margin-bottom: 0;
  }
  .p1{
    width: 100%;
    color: #333;
    font-size: 0.8rem;
    overflow: hidden;
  }
  .p2{
    width: 100%;
    color: #999;
    font-size: 0.6rem;
  }
  .p3{
    width: 100%;
    color: #333;
    font-size: 0.6rem;
  }
  .uls{
    width: 100%;
  }
  .uls>li{
    width: 100%;
    margin-bottom: 0.5rem;
  }
  .uls>p{
    font-size: 0.6rem;
    color: #999999;
    height: 2.5rem;
    padding: 0.5rem;
    background: #F5F5F5;
  }
  .uls>p>button{
    background: #F5F5F5;
    border:0.05rem solid #F5F5F5;
    float: right;
  }
  .rxb{
    font-size: 0.8rem;
    color: #666;

  }
  .shopfoods{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #F5F5F5;
  }
  .shopfoodsleft{
    width: 100%;
    height: 25.5rem;
    overflow: auto;
  }
  .ashopfoodright{
    display: inline-block;
    width: 75%;
    height: 25.5rem;
    overflow: auto;
    background: white;
  }
  .shopdown{
    width: 100%;
    height: 2.2rem;
    position: fixed;
    bottom: 0;
    background: #3D3D3F;
    color: white;
    font-weight: 700;
  }
  .shopdown>ul{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .shopdown11{
    background: #3D3D3F;
    width: 2.8rem;
    height: 2.8rem;
    border: 0.2rem solid #444;
    border-radius: 50%;
    text-align: center;
    line-height: 2.6rem;
    position: absolute;
    top:-1.25rem;
    left: 0.5rem;

  }
  .shopdown11>i{
    font-size: 1.5rem;
  }
  .shopdown12{
    margin: 0 0 0 3.8rem;
  }
  .shopdown12>p{
    height: 1.2rem;
    margin: 0;
  }
  .p10{
    font-size: 0.6rem;
  }
  .shopdown3{
    height: 100%;
  }
  .shopdown3>button{
    width: 6.5rem;
    height: 2.2rem;
    text-align: center;
    color: white;
    border: 0;
    font-size: 0.8rem;
    padding: 0.2rem 0.7rem;
  }

</style>
