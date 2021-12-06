<template>
  <div id="app">
    <!-- <leftNav></leftNav> -->
    <!-- <LeftCatalog></LeftCatalog> -->
    <div class="main"> 
      <router-view/>
    </div>
  </div>
</template>

<script>
    //import LeftCatalog from "@/components/Compos/LeftCatalog.vue"
    export default {

    }
</script>

<style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      /* margin-top: 60px; */
    }
    .main{
      float:left;
      width:100%;
      background-color: rgb(233, 233, 233);
      height: 100%;
      /* overflow: hidden; */
    }
</style>
