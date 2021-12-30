import Vue from 'vue'
import Vuex from 'vuex'
//import Apis from '@/apis/api.js'
import axios from "axios"
import JSONPath from "JSONPath"
let apiUrl="http://localhost:3000/fruit";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    articleList: [],
    filteredList:[],
    dialogFormVisible:false,
    types:[],
    reFresh:false
  },
  mutations: {
    getArticleList:(state,payload)=>{
      state.articleList=payload
      state.filteredList=state.articleList
    },
    getTypes:(state)=>{
      state.types=Array.from(new Set(state.articleList.map(a => a.taste)));
    },
    ToogleRefreshCompo:(state,refreshStatus)=>{
      state.reFresh=refreshStatus;
    },
    getListByType:(state,typeString)=>{
      state.filteredList=state.articleList.filter((item) => {
        return item.taste===typeString
      })
    },
    resetFilteredList:(state)=>{
      state.filteredList=state.articleList
    },
    showSelectArticle:(state,val)=>{
      state.previewedProduct=val
    },
    toggleDialogForm:(state)=>{
      state.dialogFormVisible=!state.dialogFormVisible
    }
  },
  actions:{

    setArticleListlAction:({commit})=>{
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
    },

    createArticleAction: ({dispatch},postArticleObj) => {
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
    },

    delArticleAction: ({dispatch,commit},id) => {
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
    },

  }
})

export default store; 