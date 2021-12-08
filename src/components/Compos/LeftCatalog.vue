<template>
    <el-aside width="200px" v-if="!reFresh">
      <div id="tasteTypes">Flavours</div>
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
          'reFresh':function(newVal,oldVal){
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
            if(key==='0'){
              this.resetFilteredList()
            }else{
              this.getListByType(this.types[key-1])
            }
          },
          ...mapMutations(['getListByType','resetFilteredList','ToogleRefreshCompo']),
          ...mapActions(['setArticleListlAction'])
        },
        store
    }
</script>

<style lang="scss" scoped>
  .el-aside {
    color: $color-font-defalt;
    
  }
  #tasteTypes{
    margin-top:40px ;
    color: $color-font-defalt;
    font-weight: bold;
  }


  .is-active{
    color: $color-hint !important ;
    font-weight: bold;
  }

    
</style>