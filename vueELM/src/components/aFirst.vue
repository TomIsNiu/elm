<template>
  <div id="div1">
    <div id="header">
    <span id="span1">ele.me</span>
    <router-link id="a1" :to="{patn:'/'}">登录/注册</router-link>
  </div>
    <div id="headernext">
      <div id="headernext1">
        <span id="span2">当前定位城市：</span>
        <span id="span3">定位不准时，请在城市列表中选择</span>
      </div>
    <a href="###" id="headernext2"></a>
  </div>
    <div class="hotCity">
      <div class="p1">热门城市</div>
      <ul class="ul1">
        <li v-for="(p,i) in hotCityObj" :key="i"><router-link :to="{name:'aa',params:{id:p.id,city:p.name}}">{{p.name}}</router-link></li>
      </ul>
    </div>
    <div class="azcity" v-for="(p,i) in azArr" :key="i">
    <div class="p1">{{p}}</div>
    <ul class="ul2">
      <li v-for="(m,j) in overCityObj[p]" :key="j">
        <router-link :to="{name:'aa',params:{id:p.id,city:m.name}}">{{m.name}}</router-link></li>
    </ul>
  </div>
  </div>
</template>

<script>
    export default {
      name: "new",
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
          this.overCityObj=p.data;
          for (let k in p.data){
            zzz.push(k)
          }
          this.azArr=zzz.sort();
        });

      }
    }
</script>

<style scoped>
  #div1{
    width: 100%;
    height: 100%;
  }
  #header{
    width: 100%;
    height: 2.2rem;
    background: #3190E8;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
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
    height: 4rem;
    background: white;
    margin:2.2rem 0 0 0;
  }
  #headernext1{
    width: 100%;
    height: 2.2rem;
    border-bottom:0.05rem solid #E4E4E4;

  }
  #headernext2{
    width: 100%;
    height: 1.8rem;
    display: inline-block;
    border-bottom:0.05rem solid #E4E4E4;
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
  .hotCity{
    width: 100%;
    background: white;
    margin:0.6rem 0 0 0;
  }
  .p1{
    width: 100%;
    height: 1.4rem;
    color: #666666;
    font-size: 0.8rem;
    padding: 0.3rem 0 0 0.5rem;
    /*margin: 0.5rem 0 0 0.5rem;*/
    border-top:0.05rem solid #E4E4E4;
  }
  .ul1,.ul2{
    width: 100%;
    display: flex;
    flex-wrap:wrap;
    justify-content: left;
  }
  .ul1>li>a{
    color: #3190e8;
  }
  .ul2>li>a{
    color: #666666;
  }
  .ul1>li,.ul2>li{
    box-sizing: border-box;
    display: inline-block;
    width: 25%;
    height: 1.9rem;
    border: 0.05rem solid #E4E4E4;
    text-align: center;
    line-height: 1.64rem;
    font-size: 0.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .azcity{
    width: 100%;
    margin-top: 0.6rem;
    background: white;
  }
</style>
