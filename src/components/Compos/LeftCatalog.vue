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
          <el-menu-item data-test="leftNav" v-for="(item,index) in types" :index="(index+1).toString()" :key="item+index">{{item}}</el-menu-item>
      </el-menu>
    </el-aside>
</template>

<script>

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
          this.setArticleListAction()
        },
        watch:{
          'reFresh':function(newVal,oldVal){
            if(newVal){
              this.TOOGLE_REFRESHCOMPO(true)          
              this.$nextTick(()=>{   
                 this.TOOGLE_REFRESHCOMPO(false)   
              })
            }
          }
        },
        methods:{
          handleSelect(key) {
            if(key==='0'){
              this.RESET_FILTEREDLIST()
            }else{
              this.GET_LIST_BYTYPE(this.types[key-1])
            }
          },
          ...mapMutations(['GET_LIST_BYTYPE','RESET_FILTEREDLIST','TOOGLE_REFRESHCOMPO']),
          ...mapActions(['setArticleListAction'])
        }
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