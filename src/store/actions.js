import JSONPath from "JSONPath"
import Article from "../apis/Article";

export const setArticleListAction = async ({commit})=>{
  await Article.getArticleData()
  .then(async res=>{

    if(res.status==200){
      const objArr= await JSONPath({
        json:res.data.data,
        path:'$..[?(@.isFruit&&@.name)]'
      })
      console.log("objArr******",objArr)
      await commit('GET_ARTICLELIST',objArr) 
      commit('GET_TYPES') 
    }
  }).catch(err=>{
      console.log(err)
  })
}

export const createArticleAction = async ({dispatch},aobj) => {
  await Article.postArticleData(aobj)
  .then(res=>{
    if(res.status==201){
      dispatch('setArticleListAction')
    }
  }).catch(err=>{
        console.log(err)
  })
}

export const delArticleAction = async ({dispatch,commit},id) => {
    await Article.deleteArticleData(id).then(async res=>{
        if(res.status==200){
          await dispatch('setArticleListAction')
          commit('TOOGLE_REFRESHCOMPO',true)
        }
    }).catch(err=>{
        console.log(err)
    })
}

//*********************************************************
// export const setArticleListAction = ({commit})=>{
//   Article.getArticleData()
//   .then(res=>{
//     if(res.status==200){
//       const objArr=JSONPath({
//         json:res.data.data,
//         path:'$..[?(@.isFruit&&@.name)]'
//       })
//         commit('GET_ARTICLELIST',objArr) 
//         commit('GET_TYPES') 
//     }
//   }).catch(err=>{
//       console.log(err)
//   })
// }

// export const createArticleAction = ({dispatch},aobj) => {
//   Article.postArticleData(aobj)
//   .then(res=>{
//     if(res.status==201){
//       dispatch('setArticleListAction')
//     }
//   }).catch(err=>{
//         console.log(err)
//   })
// }

// export const delArticleAction = ({dispatch,commit},id) => {
//     Article.deleteArticleData(id).then(res=>{
//         if(res.status==200){
//           dispatch('setArticleListAction')
//           commit('TOOGLE_REFRESHCOMPO',true)
//         }
//     }).catch(err=>{
//         console.log(err)
//     })
// }
