<template>
    <!--订单备注-->
<div class="corder-comment">
  <div class="header-top">
    <router-link :to="{path:'/cconfirm'}">
      <img src="../../assets/Cleft.png" alt="" class="header-goback">
      <span class="title-header">订单备注</span>
    </router-link>
  </div>
  <div class="quick_remark">
<div class="header-style">快速备注</div>

    <ul class="remark_arr_list_ul">
      <li v-for="(v,i) in list" :key="i">
        <span  class="first last" v-for="(v1, i1) in v" :key="i1" :class="choose[i][0] === i1 ? {haha:true} : {haha:false}" @click="chooseT(i,i1)" >{{v1}}</span>
      </li>
    </ul>
  </div>
  <div class="input_remark quick_remark">
    <div class="header-style">其他备注</div>
    <textarea placeholder="请输入备注内容(可不填)" class="input-text"  v-model="notedata" ></textarea>
  </div>
  <div class="determine" @click="confirm">确定</div>
</div>
</template>

<script>
    export default {
        name: "COrderComment",
      data(){
          return{
            list:[],
            choose: [[100],[100],[100],[100],[100],[100]],
            ha:[],
            notedata:""
          }
      },
     methods: {
       chooseT(i1,i2) {
         this.choose[i1][0] = i2;
         console.log(this.choose[i1][0]);
         this.choose = [...this.choose];
         console.log(this.choose);
       },
       confirm(){
         for (let i = 0; i < this.list.length; i++) {
           if (this.list[i][this.choose[i]] == undefined) {
             continue;
           }
           this.ha.push(this.list[i][this.choose[i]]);
         }
         this.$router.push({
          name:"ccon",
          params:{
            cun:JSON.stringify(this.ha),
            haha:this.notedata
          }
         })
       }
     },
      created(){
          this.myHttp.get("/v1/carts/1/remarks",(response)=>{
            this.list=response.remarks;
            console.log(this.list);
          })
        }
    }
</script>

<style scoped>
  .corder-comment{
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
  .quick_remark{
    background-color: #fff;
    margin-top: 2.4rem;
    padding: 0 .6rem 1rem;
  }
  .header-style{
    font-size: .75rem;
    color: #333;
    line-height: 2rem;
  }
  .remark_arr_list_ul{
    display: flex;
    flex-wrap: wrap;
  }
  .remark_arr_list_ul li{
    margin-right: .7rem;
    margin-bottom: .9rem;
  }
  .remark_arr_list_ul li span{
    font-size: .7rem;
    padding: .4rem .7rem;
    border: .025rem solid #3190e8;
  }
  .first{
    color: #333;
    border-left: .025rem solid #3190e8;
    border-top-left-radius: .3rem;
    border-bottom-left-radius: .3rem;
  }
  .last{
    border-top-right-radius: .3rem;
    border-bottom-right-radius: .3rem;
    border-left: 0;
  }
  .haha{
    background-color: #3190e8;
    color:#fff;
  }
  .input_remark{
    background-color: #fff;
  }
  .input-text{
    width: 100%;
    background-color: #f9f9f9;
    border: .025rem solid #eee;
    resize: none;
    min-height: 5.5rem;
    border-radius: .2rem;
    font-size: .7rem;
    color: #666;
    padding: .5rem;
  }
  .determine{
    background-color: #4cd964;
    font-size: .8rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.9rem;
    border-radius: .2rem;
  }
</style>
