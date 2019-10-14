<template>
    <div class="account">
      <div class="bm">
        <router-link :to="{path:'/bAddress'}">
          <i class="iconfont icon-zuojian" style="line-height: 2rem; font-size: 1rem;color: white"></i>
        </router-link>
        <span class="bmi">账户信息</span>
      </div>
      <div class="tou">
        <div class="chuan">
          <input type="file" class="tu">
          <h2 class="wen">头像</h2>
          <div class="you">
            <img src="../assets/tou.png" alt="" class="imgg">
            <span>
              <i class="iconfont icon-youjian" style="line-height: 2rem; font-size: 1rem;color: #999"></i>
            </span>
          </div>
        </div>
        <router-link :to="{path:'/'}" class="yong">
          <div class="bao">
          <div class="yon">用户名</div>
          <div class="huo">
            <p class="aa">www</p>
            <i class="iconfont icon-youjian" style="line-height: 2rem; font-size: 1rem;color: #999"></i>
          </div>
          </div>
        </router-link>
        <router-link :to="{path:'/'}" class="shou">
          <div class="di">
          <h2 class="stree">收获地址</h2>
            <i class="iconfont icon-youjian" style="line-height: 2rem; font-size: 1rem;color: #999"></i>
          </div>
        </router-link>
        <div class="bang">账号绑定</div>
        <router-link :to="{path:'/'}" class="shou">
          <div class="di">
            <div class="ji">
            <i class="iconfont icon-shouji" style="line-height: 2rem; font-size: 1rem;color: #999"></i>
           手机
            </div>
            <i class="iconfont icon-youjian" style="line-height: 2rem; font-size: 1rem;color: #999"></i>
          </div>
        </router-link>
        <div class="bang">安全设置</div>
        <div class="yong" @click="yins">
          <div class="bao">
            <div class="yon">登陆密码</div>
            <div class="huo">
              <p class="aa">修改</p>
              <i class="iconfont icon-youjian" style="line-height: 2rem; font-size: 1rem;color: #999"></i>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-default btn-lg btn-block">登陆</button>
        <div class="btan" v-if="p">
          <div class="btan1">
            <span class="btan2"></span>
            <span  class="btan3"></span>
          </div>
          <p class="btan4">请在手机App中设置</p>
          <div class="btan5"  @click="yin">确认</div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "bAccount",
      data(){
          return{
            p:false
          }
      },
      methods:{
        yins(){
          this.p=true;
        },
        yin(){
          this.p=false;
        }

      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1453346_v5w9ntjvvt.css";
  @import "//at.alicdn.com/t/font_1453346_5lj3z87kfvd.css";
  @import "//at.alicdn.com/t/font_1453346_6lhpt27ouap.css";
  .bm{
    background-color: #3190e8;
    z-index: 100;
    width: 100%;
    height: 1.95rem;
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
    margin: 0;
    margin-top: .4rem;
    padding: .5rem .4rem;
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
  }
  .yon{
    color: black;
    padding-top: 0.5rem;
    padding-top: .2rem ;
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
    padding: .5rem .4rem;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ddd;
    background: #fff;
  }
  .stree{
    font-size: .9rem;
    color: #333;
    font-weight: 500;
    display: flex;
    align-items: center;
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
    background-color:#4cd964;
    width: 90%;
    margin: 1.5rem auto;
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


</style>
