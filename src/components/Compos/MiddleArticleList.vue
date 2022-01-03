<template>
  <el-container>
    <el-main>
      <el-table
        :data="filteredList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        :default-sort = "{prop: 'id', order: 'descending'}"
        style="width: 100%"
      >
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
                      data-test="delArticleOnTable"
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
          title='name'
          id='name'
          sortable
          prop="name">
        </el-table-column>
        <el-table-column
          label="Taste"
          sortable
          prop="taste">
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
              data-test="delArticle"
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
        <el-button id="createBtn" type="primary" round @click="TOOGLE_DIALOGFORM">Create Article</el-button>
      </el-header>
      
    </el-main>
  </el-container>
</template>

<script>

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
          ...mapState(['dialogFormVisible','filteredList'])
        },
        methods: {
          ...mapMutations(['SHOW_SELECTED_ARTICLE','TOOGLE_DIALOGFORM']),
          ...mapActions(['delArticleAction'])
        }
    }
</script>

<style lang="scss" scoped>

  .demo-table-expand-left {
    padding-left: 50px;
  }

  .demo-table-expand-right {
    padding-left: 50px;
    border-left: 1px dashed $color-font-defalt;
  }
  .demo-table-expand-left label {
    width: 90px;
    color: $color-font-defalt;
    font-weight: bold;
  }
  .demo-table-expand-left .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }

  #createBtn{
    background-color: $color-primary;
    border: none;
  }

  .descending{
    border-top-color: $color-hint !important;
  }
    


</style>