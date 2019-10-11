<template>
  <div id="app">
    <div id="header">
      <span id="span1">ele.me</span>
      <a href="###" id="a1">登录/注册</a>
    </div>
    <div id="headernext">
      <div id="headernext1">
        <span id="span2">当前定位城市：</span>
        <span id="span3">定位不准时，请在城市列表中选择</span>
      </div>
      <a href="###" id="headernext2"></a>
    </div>
    <div id="hotcity">
      <div class="p1">热门城市</div>
      <ul class="ul1">
        <li v-for="(p,i) in hotCityObj" :key="i">{{p.name}}</li>
      </ul>
    </div>

    <div class="azcity" v-for="(p,i) in azArr" :key="i">
      <div class="p1">{{p}}</div>
      <ul class="ul1">
        <li v-for="(m,j) in overCityObj[p]" :key="j">{{m.name}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        hotCityObj:[],
        overCityObj:[],
        azArr:[]
      }
    },
    created(){

      this.axios.get('https://elm.cangdu.org/v1/cities?type=hot').then((p)=>{
        this.hotCityObj=p.data;
      });
      let zzz=[];
      this.axios.get('https://elm.cangdu.org/v1/cities?type=group').then((p)=>{
        console.log(p.data)
        this.overCityObj=p.data;
        for (let k in p.data){
          zzz.push(k)
        }
        this.azArr=zzz.sort();
        console.log(this.azArr);
        console.log(this.overCityObj);

      });

    }

  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    font-size: 20px;
    list-style: none;
  }
  html,body{
    width: 100%;
    height: 100%;
    background: #F5F5F5;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  #header{
    width: 100%;
    height: 7%;
    background: #3190E8;
    color: white;
    border-bottom: 0.05rem solid #999999;
  }
  #span1{
    display: inline-block;
    font-size: 0.85rem;
    margin: 0.5rem 0 0 0.5rem;
  }
  #a1{
    float: right;
    display: inline-block;
    font-size: 0.85rem;
    margin: 0.5rem 0.7rem 0 0;
    text-decoration: none;
    color: white;
  }
  #headernext{
    width: 100%;
    height: 12%;
    background: white;
    margin-bottom: 0.6rem;
    border-bottom: 0.05rem solid #999999;
  }
  #headernext1{
    width: 100%;
    height: 50%;
    border-bottom: 0.05rem solid #999999;
  }
  #span2{
    display: inline-block;
    font-size: 0.7rem;
    color: #666666;
    margin: 0.8rem 0 0 0.5rem;
  }
  #span3{
    display: inline-block;
    font-size: 0.7rem;
    color: #9f9f9f;
    float:right;
    margin: 0.8rem 0.5rem 0 0;
  }
  #hotcity{
    width: 100%;
    height: 18.2%;
    background: white;
    margin-bottom: 0.6rem;
  }
  .p1{
    width: 100%;
    height: 28%;
    color: #666666;
    font-size: 0.8rem;
    padding: 0.3rem 0 0 0.5rem;
    /*margin: 0.5rem 0 0 0.5rem;*/
    border-top:0.05rem solid #999999;
  }
  .ul1{
    width: 100%;
    height: 64.8%;
    border: 0.05rem solid #999999;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
  }
  .ul1>li {
    box-sizing: border-box;
    display: inline-block;
    width: 25%;
    height: 50%;
    border: 0.05rem solid #E4E4E4;
    text-align: center;
    line-height: 1.64rem;
    font-size: 0.7rem;
    color: #57A4EC;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
