<template>
  <el-container>
    <el-aside class="margin-left" width="400px" style="background-color: rgb(238, 241, 246)">
        <el-descriptions class="margin-top" title="Details" :column="2" direction="row">
            <el-descriptions-item label="id">{{previewedProduct.id}}</el-descriptions-item>
            <el-descriptions-item label="name">{{previewedProduct.name}}</el-descriptions-item>
        </el-descriptions>

        <el-descriptions class="margin-top" :column="1" direction="vertical">
            <el-descriptions-item label="description">{{previewedProduct.description}}</el-descriptions-item>
        </el-descriptions>

        <el-descriptions class="margin-top" :column="2" direction="row">
            <el-descriptions-item label="taste">{{previewedProduct.taste}}</el-descriptions-item>
            <el-descriptions-item label="color">{{previewedProduct.color}}</el-descriptions-item>
            <el-tag size="small">price</el-tag>
            <el-descriptions-item label="price">{{previewedProduct.price}}</el-descriptions-item>
        </el-descriptions>

        <el-descriptions class="margin-top" :column="1" direction="vertical">
            <el-descriptions-item label="image">
                <el-image :src="previewedProduct.image"></el-image>
            </el-descriptions-item>
        </el-descriptions>
    </el-aside>
  </el-container>
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