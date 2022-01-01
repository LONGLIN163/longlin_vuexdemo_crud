import Api from './Api'

export default {
    getArticleData(){
       return Api.get();
    },
    postArticleData(aobj){
       return Api.post('',aobj);
    },
    deleteArticleData(id){
       return Api.delete(`/${id}`);
    }
}