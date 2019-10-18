<template>
    <div class="ashopevaluate">
      <div class="ashopevaluateup">
        <ul class="ashopevaluateupL">
          <h1>4.7</h1>
          <li>综合评价</li>
          <p>高于周边商家76。9%</p>
        </ul>
        <ul class="ashopevaluateupR">
          <li>服务态度  <van-rate v-model="4.7" readonly color="#ff6600" size="0.45rem" gutter="0.05rem" /><span> 4.7</span></li>
          <li>菜品评价  <van-rate v-model="4.7" readonly color="#ff6600" size="0.45rem" gutter="0.05rem" /><span> 4.8</span></li>
          <li>送达时间<span id="span10">  分钟</span></li>
        </ul>
        <div class="qf"></div>
      </div>
      <div class="centeranddown">
        <ul class="ashopevaluatecenter">
          <li v-for="(p,i) in evaluateInfo1" :key="i" :style="{background:p.color}">{{p.name}}({{p.count}})</li>
        </ul>
        <ul class="ashopevaluatedown">
          <li v-for="(v,j) in evaluateInfo3" :key="j">
            <div class="users">
              <img src="../assets/a1.png" alt="">
              <div class="usersnext">
                <div>
                  <span>{{v.username}}</span>
                  <div><van-rate v-model="4.7" readonly color="#ff9a0d" size="0.45rem" gutter="0.05rem" />  {{v.time_spent_desc}}</div>
                </div>
                <span class="evaluatetime">{{v.rated_at}}</span>
              </div>
            </div>
            <div class="foodname">
              <span v-for="(w,k) in v.item_ratings" :key="k" >{{w.food_name}}</span>
            </div>

          </li>
        </ul>
      </div>

    </div>
</template>

<script>
    export default {
        name: "apingjia",
      data(){
          return {
            shopId:0,
            evaluateInfo1:[],
            imgUrl:"https://elm.cangdu.org/img/",
            evaluateInfo2:[],
            evaluateInfo3:[],
          }
      },
      created(){
          this.shopId=this.$route.query.id;
          this.axios.get("https://elm.cangdu.org/ugc/v2/restaurants/" + this.shopId + "/ratings/tags").then((p)=>{
            this.evaluateInfo1=p.data;
            for(let i=0;i<this.evaluateInfo1.length;i++){
              this.evaluateInfo1[i].color=this.evaluateInfo1[i].name=='全部' ? '#3190e8' : (this.evaluateInfo1[i].name=='不满意' ? '#f5f5f5' : '#ebf5ff');
            }
          })
        this.axios.get("https://elm.cangdu.org/ugc/v2/restaurants/" + this.shopId + "/ratings?offset=0&limit=10" + this.shopId + "/ratings/tags").then((v)=>{
          this.evaluateInfo2=v.data;
          console.log(this.evaluateInfo2)
        })
        //"http://elm.cangdu.org/ugc/v2/restaurants/3269/ratings?has_content=true&offset=0&limit=10&tag_name="
        this.axios.get("http://elm.cangdu.org/ugc/v2/restaurants/" + this.shopId + "/ratings?has_content=true&offset=0&limit=10&tag_name=").then((w)=>{
          this.evaluateInfo3=w.data;
        })
      }
    }
</script>

<style scoped>
  .ashopevaluate{
    width: 100%;
    height: 100%;
  }
  .ashopevaluateup{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 0.95rem;
    background: white;
  }
  .ashopevaluateup>ul{
    margin: 0;
  }
  .ashopevaluateupL{
    width: 40%;
    float: left;
    text-align: center;
  }
  .ashopevaluateupL>h1{
    width: 100%;
    font-size: 1.4rem;
    float: left;
    color: #ff6600;
  }
  .ashopevaluateupL>li{
    font-size: 0.75rem;
    color:#666;
  }
  .ashopevaluateupL>p{
    font-size: 0.6rem;
    color: #999;
  }
  .ashopevaluateupR{
    width: 60%;
  }
  .ashopevaluateupR>li{
    font-size: 0.75rem;
    color: #333;
  }
  .ashopevaluateupR>li>span{
    font-size: 0.65rem;
    color: #ff6600;
  }
  #span10{
    font-size: 0.6rem;
    color:#999;
  }
  .centeranddown{
    width: 100%;
    height: 60%;
    overflow: auto;
  }
  .ashopevaluatecenter{
    width: 100%;
    background: white;
    margin-top: 0.5rem;
    padding: 0.5rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap:wrap;
  }
  .ashopevaluatecenter>li{
    font-size: 0.7rem;
    padding: 0.35rem;
    margin: 0 0.5rem 0.25rem 0;
    border-radius: 0.3rem;
  }
  .ashopevaluatedown{
    width: 100%;
    padding: 0.5rem;
    background: white;
    border-top: 0.05rem solid #f1f1f1;
  }
  .ashopevaluatedown>li{
    width: 100%;
  }
  .users{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .users>img{
    width: 1.75rem;
    height: 1.75rem;
  }
  .usersnext{
    width: 85%;
    display: flex;
    justify-content: space-between;
    font-size: 0.6rem;
    color: #666;
  }
  .foodname{
    margin: 0.5rem  0 0 2.5rem;
  }
  .foodname>span{
    display: inline-block;
    width: 2.5rem;
    height: 1.35rem;
    line-height: 1.35rem;
    margin:0 0.35rem 0.2rem 0;
    padding: 0 0.25rem;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
    font-size: 0.65rem;
    border:0.05rem solid #ebebeb;
    color: #999;
    box-sizing: border-box;
  }

</style>
