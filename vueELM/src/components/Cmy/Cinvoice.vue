<template>
    <div class="cinvoice">
      <div class="header-top">
        <router-link :to="{path:'/cshops'}">
          <img src="../../assets/Cleft.png" alt="" class="header-goback">
          <span class="title-header">选择发票抬头</span>
        </router-link>
      </div>
      <div class="choose-invoice">
        <span >{{con}}</span>
        <i class="iconfont icon-duihao2" @click="dui()" :class="{'na':zz}"></i>
      </div>
      <div class="determine" @click="confirm">确定</div>
    </div>
</template>

<script>
    export default {
        name: "Cinvoice",
     data() {
      return {
        zz:false,
        con:"不需要开发票"
      }
    },
      methods:{
       dui(){
         if(this.zz==false){
           this.zz=true;
           this.con="需要开发票"
         }else {
           this.zz=false;
          this.con="不需要开发票"
         }
       },
        confirm(){
          this.$router.push({
            path:"/cconfirm",
            query:{name:this.con}
          })
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1458274_yvc1psdmbp.css";
  .cinvoice{
    width: 100%;
    overflow: auto;
    position: relative;
  }
  .header-top{
    background-color: #3190e8;
    position: fixed;
    flex: 1;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
  }
  .header-goback{
    width: 2rem;
    height: 1.6rem;
    flex: 2;
    color: white;
    line-height: 2rem;
    margin-left: .4rem;
  }
  .title-header{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center;
    font-size: 0.97rem;
    font-weight: 700;
  }
 .choose-invoice {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    line-height: 2.5rem;
    margin-top: 2.4rem;
    padding: 0 .7rem;
  }
  .choose-invoice span{
    font-size: .85rem;
    color: #333;
  }
  .determine{
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .5rem;
  }
  .iconfont{
    width: 1.3rem;
    font-size: 1rem;
    color: lightgrey;
  }
  .na{
    color: #4cd964;
  }
</style>
