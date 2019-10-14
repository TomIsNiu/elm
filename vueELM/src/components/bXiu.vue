<template>
  <div>
    <div class="bm">
      <router-link :to="{path:'/bDeng'}">
        <i class="iconfont icon-zuojian" style="line-height: 3rem; font-size: 1rem;color: white"></i>
      </router-link>
      <span class="bmi">重置密码</span>
    </div>
    <div class="bmain">
      <input type="pwdType" style="border-bottom: 0.01rem solid #999;" placeholder="账号" v-model="username"/>
      <div class="bhu">
        <input :type="pwdType" class="psd" placeholder="旧密码" maxlength="20" v-model="oldpassWord"/>
      </div>
      <div class="bhu">
        <input :type="pwdType" class="psd" placeholder="请输入新密码" maxlength="20" v-model="newpassword "/>
      </div>
      <div class="bhu">
        <input :type="pwdType" class="psd" placeholder="请确认密码" maxlength="20" v-model="confirmpassword"/>
      </div>
      <div class="bne">
        <input type="text" placeholder="验证码" v-model="captcha_code">
        <img :src="yanzheng" alt="" class="byan" >
        <span  class="bright">看不清
          <br>
          <span @click="huoqu()"  style="color: cornflowerblue">换一张</span>
        </span>
      </div>
    </div>
    <button type="button" class="btn btn-default btn-lg btn-block" @click="yins" >确认修改</button>
    <div class="btan" v-if="p">
      <div class="btan1">
        <span class="btan2"></span>
        <span  class="btan3"></span>
      </div>
      <p class="btan4">{{cheng}}</p>
      <div class="btan5"  @click="yin">确认</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "bXiu",
    data() {
      return {
        pwdType: 'text',
        bss:require('../assets/new2.png'),
        yanzheng:'',
        p:'',
        username:'',
        oldpassWord:'',
        captcha_code:'',
        newpassword:'',
        confirmpassword:'',
        cheng:''
      }
    },
    methods: {
      changeType() {
        this.pwdType = this.pwdType === 'password' ? 'text' : 'password';
        this.bss=this.bss===require('../assets/new2.png')?require('../assets/new1.png'):require('../assets/new2.png');
      },
      huoqu(){
        this.axios.post('https://elm.cangdu.org/v1/captchas').then((person)=>{
          console.log(person.data.code);
          this.yanzheng=person.data.code;
        })
      },
      yin(){
        if (this.p==true){
          this.p=false;
        }
      },
      yy(){
          this.axios.post('https://elm.cangdu.org/v2/changepassword',{username:this.username,oldpassWord:this.oldpassWord,newpassword:this.newpassword,confirmpassword:this.confirmpassword,captcha_code:this.captcha_code}).then((person)=>{
            console.log(person.data.status);
            if(person.data.status==1){
              this.cheng=person.data.success;
              this.p=true;
              console.log(person.data.success)
            }
          });

      },
      yins(){
        var els = document.getElementsByTagName("input");
        for(var i = 0, j = els.length; i < j; i++) {
          if (els[i].value == "" || els[i].value == undefined || els[i].value == null) {
            this.p=true;
            this.cheng="请输入完整信息！"
          }
        }
        this.yy();
      }

    },
    created(){
      this.axios.post('https://elm.cangdu.org/v1/captchas').then((person)=>{
        console.log(person.data.code);
        this.yanzheng=person.data.code;
      });

    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1453346_v5w9ntjvvt.css";
  .bm{
    display: flex;
    justify-content: start;
    border-bottom: 0.01rem solid #999;
    align-items: start;
    background-color: dodgerblue;
    font-size: 1.5rem;
    color: white;
    overflow: hidden;
    position: relative;
  }
  .bmi{
    /*margin-left: 5.5rem;*/
    width: 80%;
    text-align: center;
  }
  .bmain {
    margin-top: 1.365853rem;
    background-color: white;
    position: relative;
  }
  .bhu{
    display: flex;
    border-bottom: 0.01rem solid #999;
    font-size: 0;
  }
  input{
    width: 100%;
    height: 2.5rem;
    border: none;
    font-size: 1rem;
    margin-bottom: 0.390243rem;
    outline-style: none;
    text-align :left;
    padding-left: 0.5rem;
  }
  .bne{
    display: flex;
    justify-content:space-around;
    border-bottom: 0.01rem solid #999;
  }
  .byan{
    width: 3rem;
    height: 1.5rem;
    margin-top: 0.8rem;

  }
  .bright{
    width: 5rem;
    height: 1.5rem;
    font-size: 0.7rem;
    margin-top: 0.4rem;
  }
  .btn{
    background-color:#4cd964;
    width: 90%;
    margin: 1rem auto;
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
