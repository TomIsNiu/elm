<template>
    <div class="asearch">
      <div class="header">
        <router-link :to="{path:'/adeliciousfood'}">
          <img src="../assets/Alleftpoint.png" alt="">
        </router-link>
        <p>搜索</p>
        <span></span>
      </div>
      <div class="seachshoporfood">
        <input type="text" placeholder="请输入商家或美食名称" v-model="shopOrfood" @input="bianhau()">
        <button @click="huoquInfo">提交</button>
      </div>
      <ul class="seachhistory" v-show="change">
        <p>搜索历史</p>
        <li v-for="(p,i) in info" :key="i" v-if="">
          <div>
            <p>{{p.name}}</p>
          </div>
          <button @click="removeData(i)">删除</button>
        </li>
        <h1 @click="deleteAll">清空搜索历史</h1>
      </ul>
      <ul class="searchend" v-show="!change">
        没有搜到结果
      </ul>
    </div>
</template>

<script>
    export default {
        name: "aSearch",data(){
          return{
            change:true,
            shopOrfood:'',
            lastInfos:[],
            info:[],
            saveInfo:[],
          }
      },
      methods:{
        bianhau(){
          if(this.shopOrfood==''){
            this.info=JSON.parse(localStorage.getItem("history1"));
            this.change=true;
          }
        },
        deleteAll(){
          localStorage.removeItem("history1");
          console.log(1)
          this.change=false;
        },
        huoquInfo(){
          this.change=false;
          //"http://elm.cangdu.org/v4/restaurants?extras[]=restaurant_activity&geohash=31.146643,121.381662&keyword=%E8%82%AF%E5%BE%B7%E5%9F%BA&type=search"
          this.axios.get("http://elm.cangdu.org/v4/restaurants?extras[]=restaurant_activity&geohash="+this.lastInfos[0]+","+this.lastInfos[1]+"&keyword="+this.shopOrfood+"&type=search").then((p)=>{
            this.info=p.data;
          });
          //保存到本地
          let arr=[];
          let info1={name:this.shopOrfood,checked:false};
          if(!localStorage.getItem("history1")){
            arr.push(info1);
            console.log(arr);
            localStorage.setItem("history1",JSON.stringify(arr));
          }else{
            arr=JSON.parse(localStorage.getItem("history1"));
            if(arr.length==0){
              arr.push(info1);
              localStorage.setItem("history1",JSON.stringify(arr));
            }else{
              let arr1=[];
              let arr2=[];
              for(let i=0;i<arr.length;i++){
                arr1.push(arr[i].name);
                arr2.push(arr[i].path);
              }
              let num=arr1.length;
              arr1.push(this.shopOrfood);
              arr1=[... new Set(arr1)];
              if(arr1.length==num+1){
                arr.push(info1);
                localStorage.setItem("history1",JSON.stringify(arr))
              }else {
                localStorage.setItem("history1",JSON.stringify(arr));
              }
            }
          }
          this.info=JSON.parse(localStorage.getItem("history1"));
        },
        removeData(index){
          this.info.splice(index,1);
          localStorage.setItem("history1",JSON.stringify(this.info));
        }
      },

      created(){
          this.lastInfos=[this.$route.query.x,this.$route.query.y];
          // 拉取history的信息
        this.info=JSON.parse(localStorage.getItem("history1"));
      },
    }
</script>

<style scoped>
  .asearch{
    width: 100%;
    height: 100%;
  }
  .header{
    width: 100%;
    height: 2.2rem;
    color: white;
    font-size: 0.8rem;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    background: #3190E8;
  }
  .header>a>img{
    display: inline-block;
    width: 0.5rem;
    height: 1rem;
  }
  .header>p{
    text-align: center;
  }
  .seachshoporfood{
    width: 100%;
    height: 2.5rem;
    padding: 0.5rem;
    background: white;
    font-size: 0.7rem;
    display: flex;
    justify-content: space-around;
  }
  .seachshoporfood>input{
    width: 80%;
    padding: 0 0.25rem;
    background: #f2f2f2;
    color: #333;
    border: .025rem solid #e4e4e4;
    outline-style: none;
  }
  .seachshoporfood>button{
    background: #3190e8;
    margin-left: 0.2rem;
    padding: 0 0.25rem;
    color: white;
    border:0.05rem solid #3190e8;
  }
  .seachhistory{
    width: 100%;
  }
  .seachhistory>p{
    height: 2rem;
    font-size: 0.6rem;
    color: #666;
    line-height: 2rem;
    padding: 0 0.5rem;
  }
  .seachhistory>li{
    width: 100%;
    height: 2rem;
    line-height:2rem;
    background: white;
    display: flex;
    justify-content: space-between;
    padding: 0 0.5rem;
    border: 0.05rem solid #E4E4E4;
  }
  .seachhistory>li>button{
    font-size: 0.7rem;
    color: #333;
    background: white;
    border: 0.05rem solid white;
  }
  .seachhistory>h1{
    width: 100%;
    font-size: 0.7rem;
    height: 2rem;
    line-height: 2rem;
    color: #3190e8;
   text-align: center;
    background: white;
  }
  .searchend{
    text-align: center;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    font-size:0.8rem;
    color: red;
  }
</style>
