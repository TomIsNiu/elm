<template>
    <div class="account">
      <div class="bm">
        <router-link :to="{path:'/adeliciousfood/bMine'}">
          <i class="iconfont icon-zuojian" style="line-height: 2.5rem; font-size: 1rem;color: white"></i>
        </router-link>
        <span class="bmi">账户信息</span>
      </div>
      <div class="tou">
        <div class="chuan">
          <input type="file" class="tu" accept="image/*"  @change="previewPic">
          <h2 class="wen">头像</h2>
          <div class="you">
            <img :src="pic" alt="" class="imgg">
            <span>
              <i class="iconfont icon-youjian" style="line-height: 2rem; font-size: 1rem;color: #999"></i>
            </span>
          </div>
        </div>
        <router-link :to="{path:'/bRevise'}" class="yong">
          <div class="bao">
          <div class="yon">用户名</div>
          <div class="huo">
            <p class="aa">{{user}}</p>
            <i class="iconfont icon-youjian" style="line-height: 2rem; font-size: 1rem;color: #999"></i>
          </div>
          </div>
        </router-link>
        <router-link :to="{path:'/bDizhi'}" class="shou">
          <div class="di">
          <h2 class="stree">收获地址</h2>
            <i class="iconfont icon-youjian" style="line-height: 2rem; font-size: 1rem;color: #999"></i>
          </div>
        </router-link>
        <div class="bang">账号绑定</div>

        <div class="shou" @click="yins">
          <div class="di">
            <div class="ji">
            <i class="iconfont icon-shouji" style="line-height: 2rem; font-size: 1rem;color: #999"></i>
           手机
            </div>
            <i class="iconfont icon-youjian" style="line-height: 2rem; font-size: 1rem;color: #999"></i>
          </div>
        </div>
        <div class="bang">安全设置</div>
        <router-link :to="{path:'/bXiu',query:{number:1}}" class="yong">
          <div class="bao">
            <div class="yon">登陆密码</div>
            <div class="huo">
              <p class="aa">修改</p>
              <i class="iconfont icon-youjian" style="line-height: 2rem; font-size: 1rem;color: #999"></i>
            </div>
          </div>
        </router-link>
        <button type="button" class="btn btn-default btn-lg btn-block" @click=" dengs">退出登陆</button>
        <div class="btan" v-if="p">
          <div class="btan1">
            <span class="btan2"></span>
            <span  class="btan3"></span>
          </div>
          <p class="btan4">请在手机App中设置</p>
          <div class="btan5"  @click="yin">确认</div>
        </div>
      </div>
      <div class='popContainer' v-if="g">
        <div class="btan  z1 " v-if="s">
          <div class="btan1 ">
            <span class="btan2"></span>
            <span  class="btan3"></span>
          </div>
          <p class="btan4 z2">是否退出登陆</p>
          <div class="z3">
            <button class="z4" @click="deng">再等等</button>
            <div class="z5">
              <button class="z51" @click="tui">退出登录</button>
            </div>
          </div>

        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "bAccount",
      data(){
          return{
            user:'',
            g:false,
            s:true,
            p:false,
            pic:require('../assets/tou.png')
          }
      },
      methods:{
        yins(){
          this.p=true;
        },
        yin(){
          this.p=false;
        },
        previewPic:function(e){
            var that = this;
            var file = e.target.files[0];
            var fr =new FileReader();
            fr.readAsDataURL(file);
            fr.onload = function(e){
              that.pic = e.target.result;
              localStorage.setItem("tou",JSON.stringify(that.pic))
            } ;
          },
          deng(){
            this.g=false
          },
        dengs(){
          this.g=true
        },
        tui(){
          this.axios.get('https://elm.cangdu.org/v2/signout').then((person)=>{
            console.log(person.data.status);
            this.g=false
            if(person.data.status==1){
              this.$router.push({
                name:'bMin',
              });
            }
          })
        }
      },
      created(){
        this.axios.get('https://elm.cangdu.org/v1/user').then((person)=>{
          console.log(person.data.username);
          if(person.data.username!=''){
            this.user=person.data.username;}
        });
        this.axios.post('https://elm.cangdu.org/v1/addimg/:type');

        if(!localStorage.getItem("tou")){
          this.pic=require('../assets/tou.png')
        }else{
          this.pic=JSON.parse(localStorage.getItem('tou'));
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1453346_v5w9ntjvvt.css";
  @import "//at.alicdn.com/t/font_1453346_5lj3z87kfvd.css";
  @import "//at.alicdn.com/t/font_1453346_6lhpt27ouap.css";

  .popContainer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
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
  .tou{
    width: 100%;
    height: 3.1rem;
  }
  .chuan{
    margin-top: .4rem;
    padding: .5rem .4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ddd;
    background: #fff;
  }
  .tu{
    display: block;
    position: absolute;
    opacity: 0;
    top: 2.35rem;
    left: 0;
    width: 100%;
    height: 3.1rem;
  }
  .wen{
    font-size: 0.8rem;
    color: #333;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  .you{
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }
  .imgg{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: .2rem;
  }
  .yong{
    display: block;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: #999;
  }
  .bao{
    margin-top: .4rem;
    padding-left:  .4rem;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ddd;
    background: #fff;
  }
  .you{
    font-size: .6rem;
    color: #333;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  .aa{
    padding-right: 0.5rem;
    margin-top: 0.3rem;
  }
  .yon{
    color: black;
    font-size: .8rem;
    padding-top: 0.6rem;

  }
  .huo{
    display: flex;
    justify-content: left;
    padding-top: .2rem;
  }
  .shou{
    text-decoration: none;
    margin: 0;
  }
  .di{
    margin-top: 0;
    padding: .4rem 0.3rem;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ddd;
    background: #fff;
  }
  .stree{
    font-size: .8rem;
    color: black;
    font-weight: 500;
    display: flex;
    align-items: center;
    padding-top: 0.3rem;
  }
  .bang{
    padding: .4rem;
    font-size: .6rem;
    color: #666;
  }
  .ji{
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    color: black;
  }
  .btn{
    background-color:#d8584a;
    width: 90%;
    height: 2rem;
    margin: 1.5rem auto;
    font-size: .8rem;
    color:white;
    padding-bottom: 1.5rem;

  }
  .btan{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -6rem;
    margin-left: -6rem;
    width: 12rem;
    animation: tipMove .4s;
    background-color: #fff;
    padding-top: .6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px;
    border-radius: .25rem;
  }
  .btan1{
    width: 3rem;
    height: 3rem;
    border: .15rem solid #f8cb86;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .btan2{
    width: .12rem;
    height: 1.5rem;
    background-color: #f8cb86;
  }
  .btan3{
    width: .2rem;
    height: .2rem;
    border: 1px;
    border-radius: 50%;
    margin-top: .2rem;
    background-color: #f8cb86;
  }
  .btan4{
    font-size: .7rem;
    color: #333;
    line-height: .9rem;
    text-align: center;
    margin-top: .8rem;
    padding: 0 .4rem;
  }
  .btan5{
    font-size: .8rem;
    color: #fff;
    font-weight: 700;
    margin-top: .8rem;
    background-color: #4cd964;
    width: 100%;
    text-align: center;
    line-height: 1.8rem;
    border: 1px;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }
  .z1{
    width: 15rem;
    margin-left: -7.5rem;
  }
  .z2{
    font-size: 1.3rem;
    padding-top: 1rem;
  }
  .z3{
    width: 100%;
    text-align: center;
    margin: 1rem;
  }
  .z4{
    background: #c1c1c1;
    margin-right: .4rem;
    display: inline-block;
    padding: .4rem 1rem;
    border-radius: 5px;
    font-size: .8rem;
    color: #fff;
    letter-spacing: 1px;
    margin-top: 26px;
    border-radius: 0.4rem;
   border: none;
  }
  .z5{
    display: inline-block;
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }
  .z51{
    display: inline-block;
    padding: .4rem 1rem;
    border-radius: 5px;
    font-size: .8rem;
    color: #fff;
    letter-spacing: 1px;
    margin-top: 26px;
    border: none;
    box-sizing: border-box;
    background-color: #dd6b55;
  }

</style>
