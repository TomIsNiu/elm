<template>
    <div>
      <div class="bm">
        <router-link :to="{path:'/bDizhi'}">
          <i class="iconfont icon-zuojian" style="line-height: 2.5rem; font-size: 1rem;color: white"></i>
        </router-link>
        <span class="bmi">新增地址</span>
      </div>
      <div class="huo">
        <div class="inpt ins">
        <input type="text" :class="inpu1" placeholder="请填写你的性名" :maxlength='10' v-model="zz" @keydown="dian">
          <p class="pp" v-if="aa">请填写您的性名</p>
        </div>
       <router-link class="inpt" :to="{path: '/bSou',query:{zz:zz,bb:bb,vv:vv,nn:nn}}">
         <input type="text" class="inpu1" placeholder="小区/写字楼/学校等" v-model="mm">
       </router-link>
        <div class="inpt inn">
          <input type="text" :class="inpu2" placeholder="请填写详细送餐地址"  v-model="xx" @keydown="dian1">
          <p class="pp" v-if="bb">送餐地址太短了，不能识别</p>
        </div>
        <div class="inpt">
          <input type="text" :class="inpu3" placeholder="请填写能够联系到您的手机号" v-model="vv" @keydown="dian2">
          <p class="pp" v-if="cc">{{shou}}</p>
        </div>
        <div class="inpt">
          <input type="text" :class="inpu4" placeholder="备用联系电话" v-model="nn" @keydown="dian3">
          <p class="pp" v-if="dd">{{shou1}}</p>
        </div>
      </div>
      <div class="xdi">
        <button :class="xque"  disabled=""  v-if="qq">新增地址</button>
        <button :class="xque"  @click="ssss" v-if="!qq">新增地址</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "bSdiz",
      data(){
          return{
            xque:'xque',
            qq:true,
            shou:'',
            shou1:'',
            zz:'',
            mm:'',
            xx:'',
            vv:'',
            nn:'',
            ww:'',
            aa:false,
            bb:false,
            cc:false,
            dd:false,
            inpu1:"inpu1",
            inpu2:"inpu1",
            inpu3:"inpu1",
            inpu4:"inpu1",

          }
      },
      methods:{
        dian(){
            if (this.zz != ''&&this.zz.length<=10) {
              this.qq = false;
              this.xque = "xque1";
              this.aa=true;
              this.inpu1="inpu11"
            }else {
              this.aa=false;
              this.inpu1="inpu1"
              this.qq = true;
              this.xque = "xque";
            }
          },
        dian1(){
          if (this.xx!=''&&this.xx.length<=5){
            this.qq = false;
            this.xque = "xque1";
            this.bb=true;
            this.inpu2="inpu11"
          }else {
            this.bb=false;
            this.inpu2="inpu1"
            this.qq = false;
            this.xque = "xque1";
          }
        },
        dian2(){
          if (this.vv ==='') {
            this.shou="手机号码不能为空";
            this.cc=true;
            this.inpu3="inpu11"
            this.qq = true;
            this.xque = "xque";
          } else {
             var reg=/^1[3456789]\d{8}$/;
              if(!reg.test(this.vv)){
                this.qq = false;
                this.xque = "xque1";
                this.shou="请输入有效的手机号码";
                this.cc=true;
                this.inpu3="inpu11"
              }else {
                this.cc=false;
                this.inpu3="inpu1"
              }
          }
        },
        dian3(){
          if (this.nn ==='') {
            this.shou1="手机号码不能为空";
            this.dd=true;
            this.inpu4="inpu11";
            this.qq = false;
            this.xque = "xque1";
          } else {
              var reg=/^1[3456789]\d{8}$/;
              if(!reg.test(this.nn)){
                this.shou1="请输入有效的手机号码";
                this.dd=true;
                this.inpu4="inpu11";
                this.qq = false;
                this.xque = "xque1";
              }else {
                this.dd=false;
                this.inpu4="inpu1";
                this.qq = false;
                this.xque = "xque1";
              }

          }
        },
        ssss(){
          let arrs = [];
          const info = { name:this.zz, phone: this.vv };
          if(!localStorage.getItem("houw")){
            arrs.push(info);
          }else{
            arrs=JSON.parse(localStorage.getItem('houw'));
            arrs.push(info);
          }
          localStorage.setItem("houw",JSON.stringify(arrs));
          this.$router.push({path:'/bDizhi'})
          console.log(1234)
        },
      },
      created(){
         this.mm= this.$route.params.name;
         this.zz=this.$route.params.up.zz;
         this.bb=this.$route.params.up.bb;
         this.vv=this.$route.params.up.vv;
         this.nn=this.$route.params.up.nn;
          console.log( this.$route.params.up);
      }
    }

</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1453346_v5w9ntjvvt.css";
  .inn{
    margin-top: 0.3rem;
  }
  .bm{
    background-color: #3190e8;
    z-index: 100;
    width: 100%;
    height: 2.5rem;
    position: relative;
  }
  .ins{
    padding-top: 0.3rem;
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
  .huo{
    margin-top: .4rem;
    padding: 0;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    background-color: white;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }
  .inpt{
    padding-bottom: 0.3rem;
  }
  .inpu1{
    display: block;
    color: black;
    width: 17rem;
    height: 2rem;
    font-size: .8rem;
    margin: 0 auto;
    padding: .3rem;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 3px;
  }
  .inpu11{
    display: block;
    width: 17rem;
    height: 2rem;
    font-size: .8rem;
    margin: 0 auto;
    padding: .3rem;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 3px;
    border: 0.01rem solid red;
  }
  .pp{
    font-size: .6rem;
    color: #ea3106;
    padding-left: .9rem;
    margin-top: .1rem;
  }
  .xdi{
    margin: .6rem auto;
    width: 17rem;
    background: #4cd964;
    border-radius: 3px;
  }
  .xque1{
    width: 100%;
    font-size: .8rem;
    border: none;
    color: #fff;
    line-height: 1.6rem;
    background: none;
    font-weight: 700;
    opacity: .6;
    transition: all .4s;
    opacity: 1;
  }
  .xque{
    width: 100%;
    font-size: .8rem;
    border: none;
    color: #999;
    line-height: 1.6rem;
    background: none;
    font-weight: 700;
    opacity: .6;
    transition: all .4s;
    opacity: 1;
  }
</style>
