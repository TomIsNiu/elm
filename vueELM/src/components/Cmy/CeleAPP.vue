<template>
    <div id="Cimg">
      <mt-header>
        <router-link to="/" slot="left" class="con">
          <img src="../../assets/Cleft.png" alt="" id="Cleft">
          <span id="load">下载</span>
        </router-link>
      </mt-header>
      <div id="Capp">
        <img src="../../assets/timg.jpg" alt="">
        <p id="zai">下载饿了么app</p>
        <button type="button" class="btn btn-success" style="width: 15rem;background-color: #4cd964" @click="xia">下载</button>
        <div class="btan" v-if="p">
          <div class="btan1">
            <span class="btan2"></span>
            <span  class="btan3"></span>
          </div>
          <p class="btan4">IOS用户请前往AppStore下载</p>
          <div class="btan5"  @click="yin">确认</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CeleAPP",
      data() {
        return {
          products: [],
          p:false
        }
      },
      // components:{
      //   [Dialog.Component.name]: Dialog.Component
      // },
      methods:{
        xia(){
          if (this.p==false){
            this.p=true;
          }
        },
        yin(){
          if (this.p==true){
            this.p=false;
          }
        }
      },
    }
</script>

<style scoped>
#Cimg{
  width: 100%;
  height: 2rem;
  background-color: #3190e8;
}
  /*左按钮*/
  #Cleft{
    width: 1.5rem;
    height: 1.5rem;
  }
.con {
  display: flex;
  justify-content: start;
  align-items: start;
  /*padding-top: 1rem;*/
}
  /*下载*/
  #load{
    width: 14rem;
    color: white;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
  }
  #Capp{
    width: 100%;
   text-align: center;
  }
  /*图标*/
#Capp img{
  width: 9rem;
  height:9rem;
  margin-top: 2rem;
}
#Capp #zai{
    font-size:1rem;
    color: #666;
    margin-bottom: 1rem;
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
  font-size: 0.7rem;
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
<style>
  h1{
    margin-bottom: 0;
  }
</style>

