<template>
    <div class="div1">
      <div class="header">
        <router-link class="a1" :to="{path:'afirst'}"><</router-link>
        <span>{{isCity}}</span>
        <router-link class="a2" :to="{path:'afirst'}">切换城市</router-link>
      </div>
      <div class="inputbut">
        <input type="text" placeholder="输入学校、商务楼、地址" v-model="inputInfo">
        <button @click="rqInfo">提交</button>
      </div>
      <div class="historyInfo">
        <p class="p1">搜索历史</p>
          <div class="Info" v-for="(p,i) in sshistory" :key="i">
            <router-link :to="{name:'ab',params:{name:p.name,latitude:p.latitude,longitude:p.longitude}}" class="a3">
              <h4>{{p.name}}</h4>
              <p>{{p.address}}</p>
            </router-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "aSearchCity",
      data(){
          return {
            city:[],
            inputInfo:'',
            dt:'https://elm.cangdu.org/v1/pois?type=search&city_id=',
            sshistory:[]
          }
      },

      computed:{
        isCity(){
          this.city=[this.$route.params.id,this.$route.params.city];
          return this.city[1];
        },
      },
      methods:{
        rqInfo(){
          let infodz=this.dt + this.city[0] + "&keyword=" + this.inputInfo;
          console.log(infodz);
          this.axios.get(infodz,).then((p)=>{
            this.sshistory=p.data;
            console.log(this.sshistory);
          });
        }
      }
    }
</script>

<style scoped>
  .header{
  width: 100%;
  height: 2.2rem;
  background: #3190E8;
  color: white;
  position: relative;
  margin-bottom: 0.6rem;
}
  .a1{
    display: inline-block;
    color: white;
    margin: 0.5rem 0 0 0.5rem;
  }
  .header>span{
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    position: absolute;
    top:0.5rem;
    left: 8rem;
  }
  .a2{
  display: inline-block;
  color: white;
  margin: 0.5rem 0.5rem 0 0;
  float: right;
  font-size: 0.7rem;
}
  .inputbut{
    width: 100%;
    height: 5.2rem;
    background: white;
    border: 0.05rem solid #E4E4E4;
  }
  .inputbut>input{
  display: inline-block;
  width: 85%;
  height: 1.6rem;
  margin:0.6rem 0 0 0.8rem;
  padding: 0 0.5rem;
    border: 0.05rem solid #E4E4E4;
    outline-style: none;
}
  .inputbut>button{
  display: inline-block;
  width: 90%;
  height: 1.6rem;
  margin:0.6rem 0 0.6rem 0.8rem;
  text-align: center;
  background: #3190E8;
  border: 0.05rem solid #3190E8;
  font-size: 0.8rem;
  color: white;
}
  .historyInfo{
    width: 100%;
  }
  .p1{
    color: #333333;
    font-size: 0.6rem;
    padding-left: 0.5rem;
  }
  .Info{
    width: 100%;
    border-top: 0.05rem solid #E4E4E4;
    padding-top:0.75rem
  }
  .Info>.a3>h4{
    color: #333333;
    font-size: 0.75rem;
    margin: 0 1rem 0.4rem;
  }
  .Info>.a3>p{
    color: #999999;
    font-size: 0.6rem;
    margin: 0 1rem 0.6rem;
  }
  .a3{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
</style>
