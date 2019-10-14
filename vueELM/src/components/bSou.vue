<template>
    <div class="app">
      <div class="bm">
        <router-link :to="{path:'/bAddress'}">
          <i class="iconfont icon-zuojian" style="line-height: 2rem; font-size: 1rem;color: white"></i>
        </router-link>
        <span class="bmi">搜索地址</span>
      </div>
      <div class="bsou">
        <input type="text" placeholder="请输入小区/写字楼/学校等" class="binp" v-model="input">
        <button class="bque">确认</button>
      </div>
      <div class="bti">为了满足商家的送餐要求，建议您从列表中选择地址</div>
      <div class="bbei">
        <p class="bp">找不到地址？</p>
        <p class="bp">请尝试输入小区/写字楼或学校名称</p>
        <p class="bp">详细地址(如门牌号)可稍后输入哦。</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "bSou",
      data(){
          return{
            input:''
          }
      },
      methods:{

      },
      created(){
          this.axios.get('https://elm.cangdu.org/v1/pois?city_id=1&keyword=this.input&type=search').then((person)=>{
            console.log(person)
          })
      }

    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1453346_v5w9ntjvvt.css";
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
  .bsou{
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: .5rem;
  }
  .binp{
    display: block;
    width: 14rem;
    padding: .4rem;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: .6rem;
  }
  .bque{
    display: block;
    width: 3rem;
    background: #3199e8;
    font-size: .7rem;
    color: #fff;
    border-radius: 5px;
    border: none;
    box-sizing: border-box;
  }
  .bti{
    background: #fff6e4;
    font-size: .62rem;
    color: #ff883f;
    text-align: center;
    padding: .2rem 0;
  }
  .bbei{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
  }
  .bp{
    width: 100%;
    text-align: center;
    font-size: .7rem;
    color: #969696;
    margin-bottom: .4rem;
  }


</style>
