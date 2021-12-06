<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>Cat</template>
            <el-menu-item-group>
              <template slot="title">group by...</template>
              <el-menu-item index="2-1">type1</el-menu-item>
              <el-menu-item index="2-2">type2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
  .el-aside {
    color: #333;
  }
</style>