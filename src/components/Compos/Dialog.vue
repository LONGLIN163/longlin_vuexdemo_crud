<template>
    <el-dialog title="product info" :visible="dialogFormVisible" @close='toggleDialogForm'>

        <el-form :model="form">

            <h1>{{formMode}}</h1>

            <el-form-item v-if="formMode==='edit'" label="id" :label-width="formLabelWidth">
                <el-input v-model="form.id" autocomplete="off" disabled></el-input>
            </el-form-item>

            <el-form-item label="name" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="description" :label-width="formLabelWidth">
                <el-input v-model="form.description" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="taste" :label-width="formLabelWidth">
                <el-input v-model="form.taste" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="color" :label-width="formLabelWidth">
                <el-input v-model="form.color" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="image" :label-width="formLabelWidth">
                <el-input v-model="form.image" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="expires" :label-width="formLabelWidth">
                <el-input v-model="form.expires" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="price" :label-width="formLabelWidth">
                <el-input v-model="form.price" autocomplete="off"></el-input>
            </el-form-item>

        </el-form>

        <div slot="footer" class="dialog-footer">
            <el-button @click="toggleDialogForm">Cancel</el-button>
            <el-button v-show="formMode===''" type="primary" @click="handleCreate(form)">Create</el-button>
        </div>

    </el-dialog>
</template>

<script>
    import store  from '@/vuex/store'
    import {mapState,mapMutations,mapActions} from 'vuex'

    export default {
        data(){
            return {
                formLabelWidth: '120px',
            }
        },
        props:['formMode','form'],
        computed:{
          ...mapState(['articleList','dialogFormVisible'])
        },
        methods: {
          handleCreate(form){
            this.createArticleAction(form);
            this.toggleDialogForm()
          },
          ...mapMutations(['toggleDialogForm']),
          ...mapActions(['createArticleAction'])
        },
        store
    }
</script>

<style scoped>

</style>