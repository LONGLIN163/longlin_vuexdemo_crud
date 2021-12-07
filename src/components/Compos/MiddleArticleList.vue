<template>
  <el-container>
    <el-main>
      <el-table
        :data="articleList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        :default-sort = "{prop: 'id', order: 'descending'}"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-form label-position="left" inline class="demo-table-expand-left" >
                  <el-form-item label="ID:">
                    <span>{{ props.row.id }}</span>
                  </el-form-item>
                  <el-form-item label="Name:">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="Taste:">
                    <span>{{ props.row.taste }}</span>
                  </el-form-item>
                  <el-form-item label="Color:">
                    <span>{{ props.row.color }}</span>
                  </el-form-item>
                  <el-form-item label="Expires date:">
                    <span>{{ props.row.expires }}</span>
                  </el-form-item>
                  <el-form-item label="Price:">
                    <span>{{ props.row.price }}</span>
                  </el-form-item>

                 <el-button 
                    size="mini" 
                    type="danger" 
                    @click="delArticleAction(props.row.id)"
                  >Delete</el-button>

                </el-form>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-form label-position="left" inline class="demo-table-expand-right" >
                  <el-form-item label="Image:">
                    <span>
                      <el-image 
                        style="width: 400px;"
                        :src="props.row.image"
                      ></el-image>
                    </span>
                  </el-form-item>
                </el-form>
              </div>
            </el-col>
          </el-row>


          </template>
        </el-table-column>

        <el-table-column
          label="Article ID"
          sortable
          prop="id">
        </el-table-column>
        <el-table-column
          label="Name"
          sortable
          prop="name">
        </el-table-column>
        <el-table-column
          label="Expires date"
          sortable
          prop="expires">
        </el-table-column>
        <el-table-column
          label="Price"
          sortable
          prop="price">
        </el-table-column>

        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="search..."/>
          </template>

          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="delArticleAction(scope.row.id)"
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
          setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);
          },
          handleCurrentChange(val) {
            this.currentRow = val;
            this.showSelectArticle(val)
          },
          ...mapMutations(['showSelectArticle','toggleDialogForm']),
          ...mapActions(['setAlAction','delArticleAction'])
        },
        created(){
          this.setAlAction()
        },
        store
    }
</script>

<style scoped>

  .demo-table-expand-left {
    font-size: 0;
  }

  .demo-table-expand-right {
    font-size: 0;
    padding-left: 50px;
    border-left: 1px dashed #99a9bf;
  }
  .demo-table-expand-left label {
    width: 90px;
    color: #99a9bf;
    font-weight: bold;
  }
  .demo-table-expand-left .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

</style>