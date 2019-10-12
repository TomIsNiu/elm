<template>
    <div class="div1">
      <div class="header">
        <a href="#" class="a1"><img src="../assets/sousuo.png" alt=""></a>
        <p>{{lastInfo[0]}}</p>
        <a href="#" class="a2"><img src="../assets/touxinag.png" alt=""></a>
      </div>
      <div class="swiper-container foodsort">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul class="ul1">
              <a href="#" v-for="(p1,i1) in foodArr1" :key="i1">
                <img :src="urlArr+p1.image_url" alt="" class="img1">
                <p class="span1">{{p1.title}}</p>
              </a>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul class="ul2">
              <a href="#" v-for="(p2,i2) in foodArr2" :key="i2">
                <img :src="urlArr+p2.image_url" alt="" class="img1">
                <p class="span1">{{p2.title}}</p>
              </a>
            </ul>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="foods">
        <div class="fjsj">
          <img src="../assets/fjdp.png" alt="">
          <span>附近商家</span>
        </div>
        <ul>
          <li>
            <a href="#" class="a5">
              <img src="../assets/touxinag.png" alt="">
              <div class="rights">
                <div class="up">
                  <span>品牌</span>
                  <div class="xgys">效果演示</div>
                  <div class="bzp">
                    <span>票</span>
                    <span>准</span>
                    <span>保</span>
                  </div>
                </div>
                <div class="center"></div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import "../../node_modules/swiper/css/swiper.css"
    export default {
      name: "aDeliciousFood",
      data(){
        return {
          foodArr1:[],
          foodArr2:[],
          urlArr:'https://fuss10.elemecdn.com',
          swiperOption: {
            pagination: '.swiper-pagination',
            loop: true,
            thresholdTime: 100,
            direction:'horizontal',
            infinite:1,
            slidesToScroll:1,
          },
          lastInfo:[],
          diqu:'http://elm.cangdu.org/v2/pois/',
          diquInfo:[],
        }
      },
      computed:{

      },
      mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
          direction: 'horizontal',
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
     },
      created(){
        this.lastInfo=[this.$route.params.name,this.$route.params.latitude,this.$route.params.longitude];
        console.log(this.lastInfo);
        this.axios.get('https://elm.cangdu.org/v2/index_entry').then((p)=>{
          let Arr=[],Arr1=[];
          Arr=p.data;
          this.foodArr1=Arr.splice(0,8);
          this.foodArr2=Arr.splice(0,8);
        })
        let onedz='http://elm.cangdu.org/v2/pois/31.143657,121.660764'
        this.axios.get(this.diqu + this.lastInfo[1] + ',' + this.lastInfo[2]).then((p)=>{
          console.log(p.data);
          this.diquInfo=p.data;
          console.log(this.diquInfo)
        })
      }
    }
</script>

<style scoped>
  .div1{
    width: 100%;
    height: 100%;
    position: relative;
    width: 100%;
  }
  .header{
    width: 100%;
    height: 2.2rem;
    background: #3190E8;
    color: white;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
  }
  .a1{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
  }
  .header>p{
    text-align: center;
    padding-top: 0.5rem;
  }
  .a1>img,.a2>img{
    width: 100%;
  }
  .a2{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
  .foodsort{
    width: 100%;
    height: 10rem;
    background: white;
    margin-top: 2.2rem;
    text-align: center;
  }
  ul1,ul2{
    width: 100%;
    height: 10rem;
  }
  .ul1>a,.ul2>a{
    display: inline-block;
    width: 25%;
    height: 4.3rem;
    padding: 0.35rem 0;
  }
   .ul1>a>p, .ul2>a>p{
    color: #666666;
    font-size: 0.6rem;
  }
  .img1{
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin-bottom: 0.35rem;
  }
  .ul1{
    height: 10rem;
  }
  .ul2{
    height: 10rem;
  }
  .foods{
    width: 100%;
    background: white;
    margin-top: 0.7rem;
  }
  .fjsj{
    width: 100%;
    height: 2rem;
  }
  .fjsj>img{
    width: 0.9rem;
    height: 0.9rem;
    margin:0.5rem 0 0 0.7rem;
  }
  .fjsj>span{
    font-size: 0.6rem;
    color: #999999;
    margin-left:0.2rem;
    vertical-align: 0.3rem;
  }
  .foods>ul{
    width: 100%;
    height: 5rem;
    padding: 0.75rem 0.5rem;
  }
  .foods>ul>li{
    width: 100%;
    height: 5rem;
  }
  .a5{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .a5>img{
    float: left;
    width: 3.5rem;
    height: 3.5rem;
  }
  .rights{
    width: 80%;
    display: inline-block;
    float: left;
    margin-left:0.2rem;
  }
  .up{
    width: 100%;
  }
  .up>span{
    background: #ffd930;
    color: #333;
    font-size: 0.5rem;
    margin-right: 0.25rem;
    padding: 0 0.1rem;
  }
  .xgys{
    display: inline-block;
    font-size: 0.75rem;
    color: #333;
    padding-top: 0.1rem;
  }
  .bzp{
    display: inline-block;
    color: #999;
    font-size: 0.6rem;
    padding: 0 0.05rem;
    float: right;
  }
  .bzp>span{
    float: right;
    border: 0.05rem solid #f1f1f1;
    margin-left: 0.05rem;

  }

  /* <div class="up">
        <span>品牌</span>
        <h4>效果演示</h4>
        <div>
            <span>保</span>
            <span>准</span>
            <span>票</span>
         </div>
      </div>*/
</style>
