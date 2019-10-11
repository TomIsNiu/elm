<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    font-size: 20px;
    list-style: none;
  }
  html,body{
    width: 100%;
    height: 100%;
    background: #F5F5F5;
  }
  #app {
    width: 100%;
    height: 100%;
  }
</style>
