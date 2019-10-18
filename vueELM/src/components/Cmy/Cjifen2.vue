<template>
  <div id="jifen2">
    <mt-header>
      <router-link to="/jifen" slot="left" class="con">
        <img src="../../assets/Cleft.png" alt="" id="Cleft">
        <p id="load">{{getQueryData}}</p>
      </router-link>
    </mt-header>
    <p>{{getConData}}</p>
  </div>
</template>

<script>
    export default {
      name: "Cjifen2",
      data() {
        return {
          Ccon: ""
        }
      },
      computed: {
        getQueryData() {
          return this.$route.query.name;
        },
        getConData() {
          return this.$route.query.con;
        }
      }
    }
</script>

<style scoped>
  #jifen2 {
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
    /*padding-top: 1rem;*/
  }

  #load {
    width: 14rem;
    font-size: 1rem;
    color: white;
    line-height: 1.5rem;
    margin-bottom: 0;
    text-align: center;
  }
  p{
    margin-top: 0.1rem;
  }
</style>
<style>
  h1{
    margin-bottom: 0;
  }
</style>
