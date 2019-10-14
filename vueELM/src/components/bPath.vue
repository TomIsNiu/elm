<template>
    <div id="app">
      <div class="bm">
        <router-link :to="{path:'/bDeng'}">
          <i class="iconfont icon-zuojian" style="line-height: 2rem; font-size: 1rem;color: white"></i>
        </router-link>
        <span class="bmi">选择地址</span>
      </div>
      <router-link :to="{path: '/bAddress'}" class="bdi">
        <i class="iconfont icon-jia1" style="font-size: 1.3rem"></i>
        <span class="bzhi">新增收获地址</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "bPath"
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1453346_v5w9ntjvvt.css";
  @import "//at.alicdn.com/t/font_1453346_luidj8vy6d.css";
  .bm{
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
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

</style>
