<template>
    <el-aside width="400px" style="background-color: rgb(238, 241, 246)">
        <el-descriptions class="margin-top" title="Preview" :column="4" direction="vertical">
            <el-descriptions-item label="articleId">{{previewedProduct.id}}</el-descriptions-item>
            <el-descriptions-item label="articleName">{{previewedProduct.name}}</el-descriptions-item>
            <el-tag size="small">price</el-tag>
            <el-descriptions-item label="price">{{previewedProduct.price}}</el-descriptions-item>
        </el-descriptions>
    </el-aside>
</template>

<script>

    import store  from '@/vuex/store'
    import {mapState} from 'vuex'

    export default {
        data() {
          return {
          }
        },
        computed:{
          ...mapState(['previewedProduct','articleList'])
        },
        store
    }

</script>

<style scoped>

</style>