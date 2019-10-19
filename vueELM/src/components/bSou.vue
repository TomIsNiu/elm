<template>
    <div class="app">
      <div class="bm">
        <router-link :to="{name:ss}">
          <i class="iconfont icon-zuojian" style="line-height: 2.5rem; font-size: 1rem;color: white"></i>
        </router-link>
        <span class="bmi">搜索地址</span>
      </div>
      <div class="bsou">
        <input type="text" placeholder="请输入小区/写字楼/学校等" class="binp" v-model="input">
        <button class="bque" @click="rqInfo">确认</button>
      </div>
      <div class="bti">为了满足商家的送餐要求，建议您从列表中选择地址</div>
      <div class="historyInfo">
        <div class="Info" v-for="(p,i) in sshistory" :key="i">
          <router-link :to="{name:na,params:{name:p.name,up:ss}}" class="a3">
            <h4>{{p.name}}</h4>
            <p>{{p.address}}</p>
          </router-link>
        </div>
      </div>
      <div class="bbei" v-show="aa">
        <p class="bp">找不到地址？</p>
        <p class="bp">请尝试输入小区/写字楼或学校名称</p>
        <p class="bp">详细地址(如门牌号)可稍后输入哦。</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "bSou",
      data(){
        return {
          ss:'',
          na:'',
          pp:'',
          aa:true,
          input:'',
          nn:'',
          xx:'',
          city:[],
          dt:'https://elm.cangdu.org/v1/pois?type=search&city_id=',
          sshistory:[]
        }
      },
      computed:{
        isCity(){
          this.city=[this.$route.params.id,this.$route.params.city];
          return this.city[1];
        },
      },
      methods:{
        rqInfo(){
          this.axios.get(this.dt + 1 + "&keyword=" + this.input).then((p)=>{
            this.sshistory=p.data;
            console.log(this.sshistory);
            if(this.sshistory.length>0){
              this.aa=false;
            }else {
              this.aa=true;
            }
          });
        },
        xie(){
          this.xx= this.$route.query.sou;
          console.log(this.xx)
        }
      },
      created(){
         this.ss= this.$route.query;
        this.xie();
        if(this.$route.query.sou==1){
          this.na="cc";
          this.nn="cc"
        }else {
          this.na="bb"
          this.nn="bb"
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1453346_v5w9ntjvvt.css";
  .bm{
    background-color: #3190e8;
    z-index: 100;
    width: 100%;
    height: 2.5rem;
    position: relative;
  }
  .bmi{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center;
  }
  .bsou{
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: .5rem;
  }
  .binp{
    display: block;
    width: 14rem;
    padding: .4rem;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: .6rem;
  }
  .bque{
    display: block;
    width: 3rem;
    background: #3199e8;
    font-size: .7rem;
    color: #fff;
    border-radius: 5px;
    border: none;
    box-sizing: border-box;
  }
  .bti{
    background: #fff6e4;
    font-size: .62rem;
    color: #ff883f;
    text-align: center;
    padding: .2rem 0;
  }
  .bbei{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
  }
  .bp{
    width: 100%;
    text-align: center;
    font-size: .7rem;
    color: #969696;
    margin-bottom: .4rem;
  }
  .historyInfo{
    width: 100%;
  }
  .Info{
    width: 100%;
    border-top: 0.05rem solid #E4E4E4;
    padding-top:0.75rem
  }
  .Info>.a3>h4{
    color: #333333;
    font-size: 0.75rem;
    margin: 0 1rem 0.4rem;
  }
  .Info>.a3>p{
    color: #999999;
    font-size: 0.6rem;
    margin: 0 1rem 0.6rem;
  }
  .a3{
    display: inline-block;
    width: 100%;
    height: 100%;
  }


</style>
