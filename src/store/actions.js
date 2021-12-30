import axios from "axios"
import JSONPath from "JSONPath"
let apiUrl="http://localhost:3000/fruit";

export const setArticleListlAction = ({commit})=>{
    axios({
        url:apiUrl,
        method:"GET",
    }).then(res=>{
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

export const createArticleAction = ({dispatch},postArticleObj) => {
    axios({
      url:apiUrl,
      method:"POST",
      data:postArticleObj,
    }).then(res=>{
        if(res.status==201){
          dispatch('setArticleListlAction')
        }
    }).catch(err=>{
        console.log(err)
    })
}

export const delArticleAction = ({dispatch,commit},id) => {
    axios({
      url:apiUrl+'/'+id,
      method:"DELETE",
    }).then(res=>{
        if(res.status==200){
          dispatch('setArticleListlAction')
          commit('ToogleRefreshCompo',true)
        }
    }).catch(err=>{
        console.log(err)
    })
}
