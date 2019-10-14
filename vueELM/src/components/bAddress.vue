<template>
    <div id="app">
      <div class="bm">
        <router-link :to="{path:'/bDeng'}">
          <i class="iconfont icon-zuojian" style="line-height: 2rem; font-size: 1rem;color: white"></i>
        </router-link>
        <span class="bmi">添加地址</span>
      </div>
      <div class="bc">
        <div class="bs">
          <span class="bss">联系人</span>
          <div class="brigh">
            <input type="text" placeholder="你的名字" class="binp" v-model="input1">
              <van-radio-group v-model="radio" class="bxuan">
                <van-radio name="1" checked-color="#07c160" class="bxian">先生</van-radio>
                <van-radio name="2" checked-color="#07c160">女士</van-radio>
              </van-radio-group>
          </div>
        </div>
        <div class="bs">
          <span class="bss">联系电话</span>
          <div class="brigh">
            <div class="bimg">
            <input type="text" placeholder="你的手机号" class="binp" v-model="input2">
            <i class="iconfont icon-jia2" style="color: dodgerblue;font-size: .9rem" @click="dian"></i>
            </div>
            <div class="bxuan" v-show="aa">
              <input type="text" placeholder="备选电话" class="binp">
            </div>
          </div>
        </div>
        <div class="bs">
          <span class="bss">送餐地址</span>
          <div class="brigh">
            <router-link :to="{path:'/bSou'}">
            <input type="text" placeholder="小区/写字楼/学校等" class="binp" v-model="input3">
            </router-link>
            <div class="bxuan">
              <input type="text" placeholder="详细地址(如门牌号等)" class="binp" v-model="input4">
            </div>
          </div>
        </div>
        <div class="bs">
          <span class="bss">标签</span>
          <div class="brigh">
          <input type="text"placeholder="无/家/学校/公司" class="binp" >
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-default btn-lg btn-block" @click="yins">确认</button>
      <div class="btan" v-if="p">
        <div class="btan1">
          <span class="btan2"></span>
          <span  class="btan3"></span>
        </div>
        <p class="btan4">{{showZi}}</p>
        <div class="btan5"  @click="yin">确认</div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "bAddress",
      data() {
        return {
          radio: '1',
          aa: false,
          p: false,
          input1: '',
          input2: '',
          input3: '',
          input4: '',
          showZi: ''
        }
      },
      methods: {
        dian() {
          if (this.aa == false) {
            this.aa = true;
          } else {
            this.aa = false
          }
        },
        yin() {
          if (this.p == false) {
            this.p = true;
          }else {
            this.p = false
          }
        },
        yins() {
          if (this.input1 == "" && this.input2 == "" && this.input3 == ""&&this.input4 == "") {
            this.p = true;
            this.showZi = "请输入性名";
          }
          else if (this.input1 == "") {
            if (this.input2 != "" || this.input3 != ""|| this.input4 != "") {
              this.p = true;
              this.showZi = "请输入性名";
            }
          } else if (this.input2 == "") {
            if (this.input1 != "" || this.input3 != ""|| this.input4 != "") {
              this.p = true;
              this.showZi = "请输入电话号码";
            }
          } else if (this.input3 == "") {
            if (this.input1 != "" || this.input2 != ""|| this.input4 != "") {
              this.p = true;
              this.showZi = "请选择地址";
            }
          }else if (this.input4 == "") {
            if (this.input1 != "" || this.input2 != ""||this.input3 != "") {
              this.p= true;
              this.showZi = "请填写详细地址";
            }
          }
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1453346_v5w9ntjvvt.css";
  @import "////at.alicdn.com/t/font_1453346_df0uulriog.css";
  .bm{
    background-color: #3190e8;
    z-index: 100;
    width: 100%;
    height: 1.95rem;
    position: relative;
  }
  .bmi{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center;
  }
  .bc{
    background-color: #fff;
    padding: 0 .7rem;
  }
  .bs{
    display: flex;
    border-bottom: .025rem solid #f5f5f5;
  }
  .bss{
    font-size: 0.9rem;
    color: #333;
    flex: 2;
    line-height: 2.5rem;
  }
  .brigh{
    flex: 5;
    border: none;
    box-sizing: border-box;
  }
  .binp{
    width: 100%;
    height: 2.5rem;
    font-size: .9rem;
    color: #999;
    border: none;
    outline-style: none;
  }
  .bxuan{
    display: flex;
    line-height: 2.5rem;
    border-top: .025rem solid #f5f5f5;
    padding: 0.7rem 0;
  }
  .bxian{
    padding-right: 0.5rem;
  }
  .bimg{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn{
    background-color:#4cd964;
    width: 90%;
    height: 1rem;
    margin: 1rem auto;
    font-size: 1rem;
    color: white;
    padding-bottom: 2rem;
  }
  .btn{
    background-color:#4cd964;
    width: 90%;
    margin: 1rem auto;
  }
  .btan{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -6rem;
    margin-left: -6rem;
    width: 12rem;
    animation: tipMove .4s;
    background-color: #fff;
    padding-top: .6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px;
    border-radius: .25rem;
  }
  .btan1{
    width: 3rem;
    height: 3rem;
    border: .15rem solid #f8cb86;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .btan2{
    width: .12rem;
    height: 1.5rem;
    background-color: #f8cb86;
  }
  .btan3{
    width: .2rem;
    height: .2rem;
    border: 1px;
    border-radius: 50%;
    margin-top: .2rem;
    background-color: #f8cb86;
  }
  .btan4{
    font-size: .7rem;
    color: #333;
    line-height: .9rem;
    text-align: center;
    margin-top: .8rem;
    padding: 0 .4rem;
  }
  .btan5{
    font-size: .8rem;
    color: #fff;
    font-weight: 700;
    margin-top: .8rem;
    background-color: #4cd964;
    width: 100%;
    text-align: center;
    line-height: 1.8rem;
    border: 1px;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }
</style>
