<template>
  <div id="app">
    <div class="main"> 
      <router-view/>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
    .main{
      float:left;
      width:100%;
      height: 100%;
    }
</style>
