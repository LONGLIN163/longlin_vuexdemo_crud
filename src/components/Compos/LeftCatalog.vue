<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu 
        :default-active="activeIndex" 
        class="el-menu-demo" 
        mode="vertical" 
        @select="handleSelect"
      >
          <el-menu-item index='0' :key="0">All</el-menu-item>
          <el-menu-item v-for="(item,index) in types" :index="(index+1).toString()" :key="item+index">{{item}}</el-menu-item>
      </el-menu>
    </el-aside>
</template>

<script>
    import store  from '@/vuex/store'
    import {mapState,mapMutations,mapActions} from 'vuex'
    export default {
        data() {
          return {
            activeIndex:'0'
          }
        },
        computed:{
          ...mapState(['types'])
        },
        created(){
          this.setAlAction()
        },
        methods:{
        handleSelect(key) {
          console.log("key---",key);
          if(key==='0'){
            this.resetFilteredList()
          }else{
            this.getListByType(this.types[key-1])
          }
        },
          ...mapMutations(['getListByType','resetFilteredList']),
          ...mapActions(['setAlAction'])
        },
        store
    }
</script>

<style scoped>
  .el-aside {
    color: #333;
  }
</style>