<template>
    <div class="div1">
      <div class="header">
        <router-link class="a1" :to="{path:'afirst'}"><</router-link>
        <span>{{city[1]}}</span>
        <router-link class="a2" :to="{path:'afirst'}">切换城市</router-link>
      </div>
      <div class="inputbut">
        <input type="text" placeholder="输入学校、商务楼、地址" v-model="inputInfo">
        <button @click="rqInfo">提交</button>
      </div>
      <div class="historyInfo">
        <ul class="ssls" v-show="change">
          <p class="p1">搜索历史</p>
          <li class="Info" v-for="(v,j) in saveInfo" v-if="!v.checked" :key="j" >
            <router-link :to="{path:'/adeliciousfood',query:{name:v.name,latitude:v.latitude,longitude:v.longitude}}" class="a3">
              <h4>{{v.name}}</h4>
              <p>{{v.path}}</p>
            </router-link>
          <button @click="removeData(j)">X</button>
          </li>
        </ul>

        <div class="Info" v-for="(p,i) in sshistory" :key="i">
            <router-link :to="{path:'/adeliciousfood',query:{name:p.name,latitude:p.latitude,longitude:p.longitude}}" class="a3"  @click.native="doadd(p.name,p.address,p.latitude,p.longitude)">
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
            change:true,
            city:[],
            inputInfo:'',
            addressInfo:'',
            saveInfo:[],
            sshistory:[],
          }
      },

      methods:{
        //添加
        doadd(x,y,v,w){
          let arr=[];
          let info1={name:x,path:y,latitude:v,longitude:w,checked:false};
          if(!localStorage.getItem("history2")){
            //本地history2
            arr.push(info1);
            localStorage.setItem("history2",JSON.stringify(arr));
          }else{//有history2
            arr=JSON.parse(localStorage.getItem("history2"));
            //没有信息
            if(arr.length==0){
              arr.push(info1);
              localStorage.setItem("history2",JSON.stringify(arr));
            }else {//有信息
              let arr1=[];
              for(let i=0;i<arr.length;i++){
                arr1.push(arr[i].name);
              }
              let num=arr1.length;
              arr1.push(this.shopOrfood);
              arr1=[... new Set(arr1)];
              if(arr1.length==num+1){//不重复
                arr.push(info1);
                localStorage.setItem("history2",JSON.stringify(arr))
              }else {//重复
                localStorage.setItem("history2",JSON.stringify(arr));
              }
            }
            this.saveInfo=JSON.parse(localStorage.getItem("history2"))
          }
        },
        //删除
        removeData(key){
          this.saveInfo.splice(key,1);
          localStorage.setItem("history2",JSON.stringify(this.saveInfo));
        },
        rqInfo(){
          this.axios.get('https://elm.cangdu.org/v1/pois?type=search&city_id=' + this.city[0] + "&keyword=" + this.inputInfo).then((p)=>{
            this.sshistory=p.data;
            this.change=false;
          });
        },
      },
      created(){
        this.city=[this.$route.params.id,this.$route.params.city];
        this.saveInfo=JSON.parse(localStorage.getItem("history2"));
      },
    }
</script>

<style scoped>
  .header{
  width: 100%;
  height: 2.2rem;
  background: #3190E8;
  color: white;
  margin-bottom: 0.6rem;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
}
  .a1{
    display: inline-block;
    color: white;
  }
  .header>span{
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
  }
  .a2{
  display: inline-block;
  color: white;
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
    font-size: 0.7rem;
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
    padding-top:0.75rem;
    display: flex;
    justify-content: space-between;
    background: white;
  }
  .Info>button{
    margin-right: 1rem;
    height: 1.5rem;
    line-height: 1.5rem;
    background: white;
    border: 0.05rem solid white;
  }
  .a3>h4{
    color: #333333;
    font-size: 0.75rem;
    margin: 0 1rem 0.4rem;
  }
  .a3>p{
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
