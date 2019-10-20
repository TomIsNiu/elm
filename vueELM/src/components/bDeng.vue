<template>
    <div>
      <div class="bm">
        <router-link :to="{path:uu}">
        <i class="iconfont icon-zuojian" style="line-height: 2.5rem; font-size: 1rem; color: white"></i>
        </router-link>
        <span class="bmi">密码登陆</span>
      </div>
      <div class="bmain">
        <input type="text" style="border-bottom: 0.01rem solid #e4e4e4;" placeholder="用户名" v-model="username"/>
        <div class="bhu">
        <input :type="pwdType" class="psd" placeholder="密码" maxlength="20" v-model="password"/>
        <img :src="bss" alt="" class="eye" @click="changeType()">
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
      <div style="font-size: 0.7rem; color: red; margin-top: 0.6rem">
        <p class="ppp">温馨提示：未注册过的账号，登陆时将自动注册</p>
        <p>注册过的用户可凭账号密码登陆</p>
      </div>
      <button type="button" class="btn btn-default btn-lg btn-block" @click="yins" >登陆</button>
      <router-link :to="{path: '/bXiu'}" class="bchong">重置密码?</router-link>
      <div class="btan" v-if="p">
      <div class="btan1">
        <span class="btan2"></span>
        <span  class="btan3"></span>
      </div>
      <p class="btan4">{{aa}}</p>
      <div class="btan5"  @click="yin">确认</div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "bDeng",
      data() {
        return {
          uu:'/',
          pwdType: 'password',
          bss:require('../assets/new2.png'),
          yanzheng:'',
          p:'',
          username:'',
          password:'',
          captcha_code:'',
          name:'',
          aa:'',
          ll:''
        }
      },
      methods: {
        changeType() {
          this.pwdType = this.pwdType === 'password' ? 'text' : 'password';
          this.bss=this.bss===require('../assets/new2.png')?require('../assets/new1.png'):require('../assets/new2.png');
        },
        huoqu(){
          this.axios.post('https://elm.cangdu.org/v1/captchas').then((person)=>{
            this.yanzheng=person.data.code;
          })
        },
        yin(){
          if (this.p==true){
            this.p=false;
          }
        },
        yy(){
            let username=this.username;
            let password=this.password;
            let captcha_code=this.captcha_code;
            this.axios.post('https://elm.cangdu.org/v2/login',{username:username,password:password,captcha_code:captcha_code}).then((person)=>{
              console.log(person.data);
              this.name=person.data;
              let i=0;
              for(let key in this.name){
                i++;
              }
              console.log(i);
              if(i>3){
                this.$router.push({
                  name:'bMin',
                  params:{name:this.name.username}
                });
              }else{
                this.aa=this.name.message;
                this.p=true;
              }
            });

        },
        yins(){
          var els = document.getElementsByTagName("input");
          for(var i = 0, j = els.length; i < j; i++) {
            if (els[i].value == "" || els[i].value == undefined || els[i].value == null) {
              this.p=true;
            }
          };
          this.yy();
          this.huoqu();
        },

      },
      created(){
        this.axios.post('https://elm.cangdu.org/v1/captchas').then((person)=>{
          this.yanzheng=person.data.code;
        });
       if(this.$route.query.number==1){
         this.uu='/adeliciousfood/bMine'
       }else {
         this.uu='/'
       }

      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1453346_v5w9ntjvvt.css";
  .ppp{
    margin-bottom: 0.4rem;
  }
  .bm{
    background-color: #3190e8;
    z-index: 100;
    width: 100%;
    height: 2.5rem;
    position: relative;
  }
  .bmi{
    padding-bottom: 0.1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center;
  }
  .bmain {
    margin-top: 1rem;
    background-color: white;
    font-size: 0;
    position: relative;
  }
  .bhu{
    display: flex;
    border-bottom: 0.01rem solid #e4e4e4;
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
  .eye{
    width: 4rem;
    height: 1.9rem;
    margin-top: 0.2rem;
  }
  .bne{
    display: flex;
    justify-content:space-around;
    border-bottom: 0.01rem solid #e4e4e4;
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
      color: #fff;
    font-size: 0.8rem;
      width: 90%;
      margin: 0 auto;
    }
  .bchong{
    font-size: 0.7rem;
    margin-top: 0.7rem;
    float: right;
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
