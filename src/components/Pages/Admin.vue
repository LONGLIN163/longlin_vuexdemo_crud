<template>
  <div>
    <el-container style="border: 1px solid #eee">

        <LeftCatalog></LeftCatalog>
        <MiddleArticleList></MiddleArticleList>
        <RightArticleDetail></RightArticleDetail>

    </el-container>
  </div>
</template>

<script>

  import LeftCatalog from '@/components/Compos/LeftCatalog'
  import MiddleArticleList from '@/components/Compos/MiddleArticleList'
  import RightArticleDetail from '@/components/Compos/RightArticleDetail'

    export default {
      data() {
        return  {
          msg:"vuex:"
      }
      },
      components:{
        LeftCatalog,
        MiddleArticleList,
        RightArticleDetail
      }
    }

</script>

<style scoped>

</style>