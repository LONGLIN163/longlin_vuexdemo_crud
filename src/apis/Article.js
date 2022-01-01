import Api from './Api'

export default {
    getArticleData(){
       return Api.get();
    },
    postArticleData(aobj){
       return Api.post('',aobj); // here has to use pass an param or the url
    },
    deleteArticleData(id){
       return Api.delete(`/${id}`);
    }
}