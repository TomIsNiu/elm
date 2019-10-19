<template>
    <div id="app">
      <div class="bm">
        <router-link :to="{path:'/cconfirm'}">
          <i class="iconfont icon-zuojian" style="line-height: 2.5rem; font-size: 1rem;color: white"></i>
        </router-link>
        <span class="bmi">选择地址</span>
      </div>
      <ul v-for="(v,i) in sh" :key="i" class="ww">
        <div class="cc">
        <li>
          <span>姓名:{{v.name}}</span>&nbsp;&nbsp;
          <span>性别:{{v.sex}}</span><br/>
        </li>

          <li>电话:{{v.phone}}</li>
        </div>
        <li>地址:{{v.address}}</li>
        <button class="btt" @click="sss(i)">删除</button>
      </ul>
      <router-link :to="{path: '/bAddress'}" class="bdi">
        <i class="iconfont icon-jia1" style="font-size: 1.3rem"></i>
        <span class="bzhi">新增收获地址</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "bPath",
      data(){
        return{
          sh:[],
        }
      },
      created(){
        var ct=JSON.parse(localStorage.getItem('dizhi'));
        this.sh=ct;
        console.log(this.shu)
      },
      methods:{
        sss(index){
          this.sh.splice(index,1);
          localStorage.setItem("dizhi",JSON.stringify(this.sh));
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1453346_v5w9ntjvvt.css";
  @import "//at.alicdn.com/t/font_1453346_luidj8vy6d.css";
  .bm{
    background-color: #3190e8;
    z-index: 100;
    width: 100%;
    height: 2.5rem;
    position: relative;
    overflow: hidden;
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
  .bdi{
    text-decoration: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2.5rem;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 204;
  }
  .bzhi{
    font-size: .7rem;
    color: #3190e8;
    margin-left: .3rem;
  }
  .ww{
    border-bottom: 0.03rem solid #999;
    background-color: white;
    overflow: hidden;
  }
  .cc{
    width: 100%;
    /*display: flex;*/
    /*justify-content: flex-start;*/
  }
 .btt{
  float: right;
  border: 0.01rem solid red;
  background-color: dodgerblue;
  color: white;
  padding: 0 0.5rem;
   border-radius: 0.25rem;
 }
  li{
    padding: 0.2rem;
    /*border-bottom: 0.01rem solid #e4e4e4;*/
  }

</style>
