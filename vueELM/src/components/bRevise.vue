<template>
    <div class="app">
      <div class="bm">
        <router-link :to="{path:'/bAccount'}">
          <i class="iconfont icon-zuojian" style="line-height: 2.5rem; font-size: 1rem;color: white"></i>
        </router-link>
        <span class="bmi">修改用户名</span>
      </div>
      <div class="xiu">
        <div class="xiu1">
        <input type="text" class="xinp" placeholder="输入用户名">
          <div class="xiut">
            <p class="xiuw">
              用户名只能修改一次(5-24字符之间)
            </p>
          </div>
          <div class="xdi">
            <button class="xque">确认修改</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "bRevise"
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
  .xiu{
    width: 17.2rem;
    margin: 0 auto;
  }
  .xiu1{
    padding-top: .4rem;
    margin: 0;
  }
  .xinp{
    background: none;
    width: 17.2rem;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: .2rem .1rem;
    line-height: 1.2rem;
    font-size: .9rem;
    display: block;
  }
  .xiut{
    margin: 0;
  }
  .xiuw{
    width: 100%;
    font-size: .6rem;
    color: #666;
    padding: .4rem 0 1rem;
  }
  .xdi{
    width: 100%;
    background: #3199e8;
    border: none;
  }
  .xque{
    display: block;
    border: none;
    width: 100%;
    background: none;
    line-height: 2rem;
    font-size: .8rem;
    color: #fff;
    opacity: .6;
    transition: all 1s;
  }
</style>
