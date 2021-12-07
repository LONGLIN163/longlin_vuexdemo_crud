<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)" v-if="!reFresh">
      <el-menu 
        :default-active="activeType" 
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
            activeType:'0',
            //reFresh:true,
            menuTree:[]
          }
        },
        computed:{
          ...mapState(['types','reFresh'])
        },
        created(){
          this.setArticleListlAction()
        },
        watch:{
            //  menuTree(){
 
            //       this.reFresh= false
            //       this.$nextTick(()=>{
                    
            //         this.reFresh = true
            //     })
            // }
          'reFresh':function(newVal,oldVal){
            console.log('newVal****',newVal)
            console.log('oldVal****',oldVal)
            if(newVal){
              this.ToogleRefreshCompo(true)          
              this.$nextTick(()=>{   
                 this.ToogleRefreshCompo(false)   
              })
            }
          }
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
          // reload() {
          //   console.log("update*************")
          //   this.$forceUpdate()
          // },
          ...mapMutations(['getListByType','resetFilteredList','ToogleRefreshCompo']),
          ...mapActions(['setArticleListlAction'])
        },
        store
    }
</script>

<style scoped>
  .el-aside {
    color: #333;
  }
</style>