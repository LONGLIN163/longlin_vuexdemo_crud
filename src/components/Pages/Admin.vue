<template>
  <div>
    <el-container style="border: 1px solid #eee">
        <el-header>longlin_vuexdemo_CR(no U)D</el-header>
        <el-container>
          <LeftCatalog></LeftCatalog>
          <MiddleArticleList></MiddleArticleList>
        </el-container>
    </el-container>
  </div>
</template>

<script>

  import LeftCatalog from '@/components/Compos/LeftCatalog'
  import MiddleArticleList from '@/components/Compos/MiddleArticleList'

    export default {
      data() {
        return  {
          msg:"vuex:"
        }
      },
      components:{
        LeftCatalog,
        MiddleArticleList,
      }
    }

</script>

<style lang="scss" scoped>
  .el-header, .el-footer {
    background-color: $color-primary;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }

</style>