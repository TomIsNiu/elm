<template>
  <div id="Cserver">
    <mt-header>
      <router-link :to="{path:'/bMine'}" slot="left" class="con">
        <img src="../../assets/Cleft.png" alt="" id="Cleft">
        <span id="load">服务中心</span>
      </router-link>
    </mt-header>
    <div id="Cgirl">
      <router-link :to="{path:'/'}" id="Caimg">
        <img src="../../assets/Cgirl.png" alt="">
        <span id="Czai">在线客服</span>
      </router-link>
      <router-link :to="{path:'/'}" id="Caimg1">
        <img src="../../assets/Cphone.png" alt="">
        <span id="Czai1">在线客服</span>
      </router-link>
    </div>
    <div id="row">
      <p id="Crow">热门问题</p>
      <ul>
        <li v-for="(v, i) in ccc" :key="i" id="Cli">
          <span id="con">{{v}}</span>
          <router-link :to="{path:'/ccon',query:{name:v, c:cc[i]}}" id="link">></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Cserver",
    data() {
      return {
        products: [],
        con: [],
        ccc: [],
        cc: []
      }
    },
    created() {
      this.myHttp.get("/v3/profile/explain", (response) => {
        this.products = response;
        console.log(response);
        let keyArr = Object.keys(this.products);
        keyArr.splice(keyArr.indexOf("index"), 1);
        console.log(keyArr);
        for (let i = 0; i < keyArr.length; i += 2) {
          this.ccc.push(this.products[keyArr[i + 1]]);
          this.cc.push(this.products[keyArr[i]]) ;
          console.log(this.cc);
        }
      }, (err) => {
        console.log(err);
      });
    },
  }
</script>

<style scoped>
  #Cserver {
    width: 100%;
    height: 2rem;
    background-color: #3190e8;
  }

  #Cleft {
    width: 1.6rem;
    height: 1.6rem;
  }

  .con {
    display: flex;
    justify-content: start;
    align-items: start;
    /*padding-top: 1rem;*/
  }

  #load {
    width: 14.5rem;
    font-size: 1rem;
    color: white;
    line-height: 1.5rem;
    text-align: center;
  }

  /*在线客服*/
  #Cgirl {
    width: 100%;
    text-align: center;
    overflow: hidden;
    margin-top: 0.4rem;
    background-color: white;
  }

  #Czai, #Czai1 {
    display: block;
    color: #666;
    margin-top: 0.4rem;
    font-size: 0.7rem;
    margin-bottom: 1rem;
  }

  #Caimg, #Caimg1 {
    width: 50%;
    display: inline-block;
    text-align: center;
    float: left;
    overflow: hidden;
    border-bottom: 0.1rem solid #f5f5f5;
  }

  #Caimg {
    border-right: 0.1rem solid #f5f5f5;
  }

  #Caimg img, #Caimg1 img {
    width: 1.4rem;
    height: 1.4rem;
    margin-top: 1rem;
  }
  /*热门问题*/
  #row{
    width: 100%;
    background-color: white;
  }
  #Crow{
    font-size: 1rem;
    color: #333;
    line-height: 2.5rem;
    padding-left: .7rem;
  }
  p,ul{
    margin-bottom: 0;
  }
  /*li标签*/
  #Cli{
    padding: 0 .7rem;
    line-height: 2.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #f5f5f5;
  }
  #con,#link{
    font-size: .8rem;
    color: #666;
  }
</style>
<style>
  h1{
    margin-bottom: 0;
  }
</style>
