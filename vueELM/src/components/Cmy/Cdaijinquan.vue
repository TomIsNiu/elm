<template>
  <div id="dai">
    <mt-header>
      <router-link to="/cdiscounts" slot="left" class="con">
        <img src="../../assets/Cleft.png" alt="" id="Cleft">
        <p id="load">{{getQueryData}}</p>
      </router-link>
    </mt-header>
    <p>{{getConData}}</p>
  </div>
</template>

<script>
    export default {
        name: "Cdaijinquan",
      data() {
        return {
          Ccon: ""
        }
      },
      computed: {
        getQueryData() {
          return this.$route.query.na;
        },
        getConData() {
          return this.$route.query.ha;
        }
      }
    }
</script>

<style scoped>
  #dai {
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
