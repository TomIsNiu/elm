<template>
  <!--历史红包-->
  <div>
  <div class="history">
  <mt-header>
    <router-link to="/cdiscounts" slot="left" class="con">
      <img src="../../assets/Cleft.png" alt="" id="Cleft">
      <span id="load">历史红包</span>
    </router-link>
  </mt-header>
  </div>
    <div class="haha">
    <ul class="element">
        <li v-for="(v,i) in history " :key="i" class="pro">
          <div class="hongbao">
            <div class="hongbao-list">
              <span class="hongbao-list-span">¥</span>
              <span class="hongbao-yi">{{v.amount}}</span>
              <span class="hongbao-list-span">.0</span>
              <!--<span></span>-->
              <p class="hongbao-p">满{{v.sum_condition}}元可用</p>
            </div>
            <div class="hongbao-list-right">
              <h4>{{v.name}}</h4>
              <p>{{v.end_date}}到期</p>
              <p>限货手机号为{{v.phone}}</p>
            </div>
            <img src="../../assets/Cguoqi.png" alt="">
          </div>
          <footer class="hongbao-footer">
            <p>限品类：快餐便当、特色菜</p>
          </footer>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Chistory",
      data(){
          return{
            history:''
          }
      },
      created(){
        this.myHttp.get("/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0", (response) => {
          this.history = response;
          console.log(this.history);
        }, (err) => {
          console.log(err);
        });
    }
    }
</script>

<style scoped>
  .history {
    width: 100%;
    height: 2rem;
    background-color: #3190e8;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }

  #Cleft {
    width: 1.6rem;
    height: 1.6rem;
  }
  .con {
    display: flex;
    justify-content: start;
    align-items: start;
    /*padding-top: 1rem;*/
  }
  #load {
    width: 14.5rem;
    font-size: 1rem;
    color: white;
    line-height: 1.5rem;
    text-align: center;
  }
  /*.element{*/
    /*transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);*/
    /*transition-duration: 0ms;*/
    /*transform: translate(0px, -46px) scale(1) translateZ(0px);*/
    /*padding:1rem .5rem;*/
  /*}*/
  .haha{
    padding: 0 0.8rem;
    position: relative;
    top: 2.3rem;
  }
  .pro{
    background:#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAAAXNSR0IArs4c6QAAAHtJREFUKBVjvHv37n8GKgImKpoFNmoYGcjIyAgK6+VA2o6FhUWInZ1dlomJKQDIP40cbIzERApQ01+g5jAFBYV1yJpB7P///zPev39/IpDOBfGJDcNGbIaBDAC5XFFRsQBIHwDxCRoIVPidmZl5CkgxLgBU8w/owl6QPABvmyDiDQUF7gAAAABJRU5ErkJggg==) repeat-x ;
    background-size: 0.5rem 0.2rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
  }
  .hongbao{
    display: flex;
    justify-content: space-between;
    padding: 1rem .5rem .8rem;
  }
  .hongbao-list{
    font-size: 0;
    border-right: .025rem dotted #ccc;
    flex: 1;
  }
  .hongbao-list-span{
    font-size: .75rem;
    color: #ccc;
    font-weight: 700;
  }
  .hongbao-yi{
    font-size: 1.5rem;
    color: #ccc;
  }
  .hongbao-p{
    font-size: .4rem;
    color: #ccc;
    margin-bottom: 0;
  }
  .hongbao-list-right{
    flex: 2;
    margin-left: 1.5rem;
  }
  .hongbao-list-right h4{
    font-size: .9rem;
    color: #666;
    margin-left: -.7rem;
    margin-bottom: 0;
  }
  .hongbao-list-right p {
    list-style-type: disc;
    margin-left: -.7rem;
    font-size: .4rem;
    color: #999;
    margin-bottom: 0;
  }
  .hongbao img{
    width: 3rem;
    height:3rem;
  }
  .hongbao-footer{
    background-color: #f9f9f9;
    padding: .4rem;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }
  .hongbao-footer p{list-style-type: disc;
    font-size: .4rem;
    color: #999;
    margin-left: .4rem;
    margin-bottom: 0;
  }
</style>
<style>
  h1{
    margin-bottom: 0;
  }
</style>
