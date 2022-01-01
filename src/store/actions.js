import JSONPath from "JSONPath"
import Article from "../apis/Article";

export const setArticleListAction = ({commit})=>{
  Article.getArticleData()
  .then(res=>{
    if(res.status==200){
      const objArr=JSONPath({
        json:res.data.data,
        path:'$..[?(@.isFruit&&@.name)]'
      })
        commit('getArticleList',objArr) 
        commit('getTypes') 
    }
  }).catch(err=>{
      console.log(err)
  })
}

export const createArticleAction = ({dispatch},aobj) => {
  Article.postArticleData(aobj)
  .then(res=>{
    if(res.status==201){
      dispatch('setArticleListAction')
    }
  }).catch(err=>{
        console.log(err)
  })
}

export const delArticleAction = ({dispatch,commit},id) => {
    Article.deleteArticleData(id).then(res=>{
        if(res.status==200){
          dispatch('setArticleListAction')
          commit('ToogleRefreshCompo',true)
        }
    }).catch(err=>{
        console.log(err)
    })
}
