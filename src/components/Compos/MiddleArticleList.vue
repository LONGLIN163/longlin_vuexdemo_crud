<template>
  <el-container>
    <el-main>
      <el-table
        :data="filteredList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        highlight-current-row
        @current-change="handleCurrentChange"
        :default-sort = "{prop: 'articleId', order: 'descending'}"
        height="500"
        style="width: 100%">

        <el-table-column
          label="id"
          sortable
          prop="id">
        </el-table-column>

        <el-table-column
          label="name"
          sortable
          prop="name">
        </el-table-column>

        <el-table-column
          label="price"
          sortable
          prop="price">
        </el-table-column>

        <el-table-column
          align="right">
          <template slot="header">
            <el-input
              v-model="search"
              size="mini"
              placeholder="search"/>
          </template>

          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="editArticle(scope.row)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="delArticle(scope.row.id)"
              >Delete</el-button>
          </template>
          
        </el-table-column>
      </el-table>

      <Dialog 
        :formMode='formMode'
        :form='form'
        v-if="dialogFormVisible"
      ></Dialog>
      
      <el-header style="text-align: center; font-size: 12px; margin-top: 16px;">
        <el-button type="primary" round @click="toggleDialogForm">Create Article</el-button>
      </el-header>
      
    </el-main>
  </el-container>
</template>

<script>
    import store  from '@/vuex/store'
    import Dialog  from '@/components/Compos/Dialog.vue'
    import {mapState,mapMutations, mapActions} from 'vuex'

    export default {
        data() {
          return {
            formMode:'', 
            form: {
                name: '',
                description: '',
                taste: '',
                color: '',
                image: '',
                isFruit: true,
                expires: '',
                price: ''
            },
            search: ''
          }
        },
        components:{
          Dialog
        },
        computed:{
          ...mapState(['articleList','dialogFormVisible','filteredList'])
        },
        methods: {
          editArticle(targetArticle) {
            console.log("targetArticle---",targetArticle)
            this.formMode="edit"
            //this.dialogFormVisible = true
            this.toggleDialogForm();
            this.form=JSON.parse(JSON.stringify(targetArticle))
            //console.log("form---",this.form)
          },
          setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);
          },
          handleCurrentChange(val) {
            console.log("val----",val)
            this.currentRow = val;
            this.showSelectArticle(val)
          },
          ...mapMutations(['getAlData','delArticle','showSelectArticle','toggleDialogForm']),
          //...mapActions(['setAlAction'])
        },
        created(){
          //this.setAlAction()
        },
        store
    }
</script>

<style scoped>

</style>