<template>
  <div id="Cbalance2">
    <mt-header>
      <router-link to="/cbalance" slot="left" class="con">
        <img src="../../assets/Cleft.png" alt="" id="Cleft">
        <p id="load">{{getQueryData}}</p>
      </router-link>
    </mt-header>
    <p>{{getConData}}</p>
  </div>
</template>

<script>
    export default {
        name: "Cbalance2",
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
          return this.$route.query.con;
        }
      }
    }
</script>

<style scoped>
  #Cbalance2 {
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
    text-align: center;
    margin-bottom: 0;
  }

</style>
<style>
  h1{
    margin-bottom: 0;
  }
</style>
