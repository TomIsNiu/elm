<template>
  <div id="Ccon">
    <mt-header>
      <router-link to="/cserver" slot="left" class="con">
        <img src="../../assets/Cleft.png" alt="" id="Cleft">
        <p id="load">{{getQueryData}}</p>
      </router-link>
    </mt-header>
    <p>{{getConData}}</p>
  </div>
</template>

<script>
  export default {
    name: "Ccon",
    data() {
      return {
        Ccon: ""
      }
    },
    computed: {
      getQueryData() {
        return this.$route.query.name;
      },
      getConData(){
        return this.$route.query.c;
      }
    }
  }
</script>

<style scoped>
  #Ccon {
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
    color: white;
    font-size: 1rem;
    /*line-height: 1.5rem;*/
    margin-bottom: 0;
    text-align: center;
  }
</style>
<style>
  h1{
    margin-bottom: 0;
  }
</style>
