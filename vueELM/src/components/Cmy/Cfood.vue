<template>
    <div class="food">
      <div class="header-top">
        <router-link :to="{path:'/cshops'}">
          <img src="../../assets/Cleft.png" alt="" class="header-goback">
          <span class="title-header">食品安全监督公示</span>
        </router-link>
      </div>
      <div class="scroll_container">
        <div class="shop_status_container">
          <p class="header1">食品监督安全公示</p>
          <div class="shops-detail">
            <div>
              <i class="iconfont icon-xiaolianmanyifuwu" style="color:#8ada19;
   font-size: 2.3rem;margin-right: 0.6rem"></i>
            </div>
            <div class="check-date">
              <p>
                <span>监督检查结果：</span>
                <span class="shop_status_well">良好</span>
              </p>
              <p>
                <span>检查日期:</span>
                <span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll_container">
        <div class="shop_status">
          <p class="header1">工商登记信息</p>
          <ul>
            <li>
              <p>企业名称</p>
              <p></p>
            </li>
            <li>
              <p>工商执照注册号</p>
              <p></p>
            </li>
            <li>
              <p>注册资本</p>
              <p></p>
            </li>
            <li>
              <p>注册地址</p>
              <p></p>
            </li>
            <li>
              <p>属地监管所</p>
              <p></p>
            </li>
            <li>
              <p>法定代表人</p>
              <p></p>
            </li>
            <li>
              <p>经营范围</p>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="scroll_container">
        <div class="shop_status">
          <p class="header1">餐饮许可证</p>
          <ul>
            <li>
              <p>营业范围</p>
              <p></p>
            </li>
            <li>
              <p>许可证有效期</p>
              <p></p>
            </li>
            <li>
              <p>许可证号</p>
              <p></p>
            </li>
            <li>
              <p>发证时间</p>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Cfood"
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1458274_etzls80kh8.css";
  .food{
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
  .shop_status_container{
    background-color: #fff;
    margin-top: 2rem;
    margin-bottom: .4rem;
  }
  .header1{
    line-height: 1.8rem;
    padding: 0 .6rem;
    border-bottom: .025rem solid #f1f1f1;
    font-size: .8rem;
    margin-bottom: 0;
    color: #333;
  }
  .shops-detail{
    display: flex;
    padding: .6rem;
  }
  .check-date{
    font-size: .7rem;
    color: #666;
  }
  .check-date p{
    margin-top: 0.4rem;
    margin-bottom: 0;
  }
  .shop_status_well{
    color: #7ed321;
  }
  .shop_status{
    background-color: #fff;
    margin-bottom: .4rem;
  }
  ul{
    margin-left: 1rem;
    padding: .4rem 0;
  }
  ul li{
    margin-bottom: .4rem;
  }
  ul li p:first-of-type{
    font-size: .7rem;
    color: #333;
    margin-bottom: 0;
    line-height: 1.4rem;
  }
  ul li p:nth-of-type(2){
    font-size: .6rem;
    color: #999;
    margin-bottom: 0;
    line-height: 1.4rem;
  }
</style>
