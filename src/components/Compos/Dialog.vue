<template>
    <el-dialog :visible="dialogFormVisible" @close='TOOGLE_DIALOGFORM'>

        <el-form :model="form">

            <h1 id="productinfo">Product info</h1>

            <el-form-item label="name" :label-width="formLabelWidth">
                <el-input data-test="dialog_name" id="aname" v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="description" :label-width="formLabelWidth">
                <el-input data-test="dialog_description" v-model="form.description" autocomplete="off"></el-input>
            </el-form-item>


            <el-form-item  data-test="taste" label="taste" :label-width="formLabelWidth">
                <el-select v-model="form.taste" placeholder="please select" style="width: 100%;">
                    <el-option
                     data-test="dialog_type"
                    v-for="item in types"
                    :key="item"
                    :label="item"
                    :value="item">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item data-test="dialog_color" label="color" :label-width="formLabelWidth">
                <div class="colorBox">
                    <el-color-picker v-model="form.color"></el-color-picker>
                    <div data-test="colorTxt" class="colorTxt">{{form.color}}</div>
                </div>
            </el-form-item>

            <el-form-item label="image" :label-width="formLabelWidth">
                <el-input v-model="form.image" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item data-test="dialog_date" label="expires" :label-width="formLabelWidth">
                
                    <el-date-picker
                        v-model="form.expires"
                        type="date"
                        style="width: 100%;"
                        placeholder="choose a date"
                    >
                    </el-date-picker>
                
            </el-form-item>

            <el-form-item label="price" :label-width="formLabelWidth">
                <el-input v-model="form.price" autocomplete="off"></el-input>
            </el-form-item>

        </el-form>

        <div slot="footer" class="dialog-footer">
            <el-button id="cancelCreateBtn" @click="TOOGLE_DIALOGFORM">Cancel</el-button>
            <el-button id="createArticleBtn" v-show="formMode===''" type="primary" @click="handleCreate(form)">Create</el-button>
        </div>

    </el-dialog>
</template>

<script>

    import {mapState,mapMutations,mapActions} from 'vuex'

    export default {
        data(){
            return {
                formLabelWidth: '120px',
            }
        },
        props:['formMode','form'],
        computed:{
          ...mapState(['articleList','dialogFormVisible','types'])
        },
        methods: {
          handleCreate(form){
            this.createArticleAction(form);
            this.TOOGLE_DIALOGFORM()
          },
          ...mapMutations(['TOOGLE_DIALOGFORM']),
          ...mapActions(['createArticleAction'])
        }
    }
</script>

<style lang="scss" scoped>
    .colorTxt{
        height: 40px;
        line-height: 40px;
        margin-left: 10px;
    }
    .colorBox{
        display: flex;
        flex-direction: row;
        align-items: flex-start
    }
    #createArticleBtn{
        background-color: $color-primary;
        border: none;
    }

</style>