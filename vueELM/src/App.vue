<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import   "..de_modules/bootstrap/dist/css/bootstrap.css";
  export default {
    name: 'App',
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  html,body{
    width: 100%;
    height: 100%;
    font-size: 20px;
    background: #F5F5F5;;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>
