<template>
  <div id="member1">
    <mt-header>
      <router-link to="/cmembercenter" slot="left" class="con">
        <img src="../../assets/Cleft.png" alt="" id="Cleft">
        <p id="load">我的优惠</p>
      </router-link>
    </mt-header>
    <p>{{getQueryData}}</p>
  </div>
</template>

<script>
    export default {
        name: "CMemberCenter1",
      data() {
        return {
          Ccon: ""
        }
      },
      computed: {
        getQueryData() {
          return this.$route.query.naa;
        },
      }
    }
</script>

<style scoped>
  #member1 {
    width: 100%;
    height: 2rem;
    background-color: #3190e8;
  }

  #Cleft {
    width: 1.5rem;
    height: 1.5rem;
  }

  .con {
    display: flex;
    justify-content: start;
    align-items: start;
  }

  #load {
    width: 14rem;
    font-size: 1rem;
    color: white;
    line-height: 1.5rem;
    margin-bottom: 0;
    text-align: center;
    margin-top: 0.3rem;
  }
</style>
<style>
  h1{
    margin-bottom: 0;
  }
</style>
