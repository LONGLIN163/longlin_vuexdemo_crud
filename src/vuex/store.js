
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
    previewedProduct:{
      id: 0,
      name: '',
      description: '',
      taste: '',
      color: '',
      image: '',
      isFruit: true,
      expires: '',
      price: ''
    },
    dialogFormVisible:false,
    types:["Practical","Incredible","Licensed","Refined","Intelligent","Handmade"]
  },
  //ArticleList=Al
  mutations: {
    getAlData:(state,payload)=>{
      state.articleList=payload
      console.log("init List---",state.articleList)
      state.filteredList=state.articleList
    },
    getListByType:(state,typeString)=>{
      state.filteredList=state.articleList.filter((item) => {
        return item.taste===typeString
      })
      console.log("filter List---",state.filteredList)
    },
    resetFilteredList:(state)=>{
      state.filteredList=state.articleList
    },
    delArticle:(state,deletedId)=>{
      state.articleList=state.articleList.filter((item)=>{
        return item.id!==deletedId
      })
      console.log("After delArticle List---",state.articleList)
    },
    showSelectArticle:(state,val)=>{
      state.previewedProduct=val
      console.log("After select an item---",state.previewedProduct)
    },
    toggleDialogForm:(state)=>{
      state.dialogFormVisible=!state.dialogFormVisible
    }
  },
  actions:{

    setAlAction:({commit})=>{
        axios({
            url:apiUrl,
            method:"GET",
        }).then(res=>{
            if(res.status==200){
              const objArr=JSONPath({
                json:res.data.data,
                path:'$..[?(@.isFruit&&@.name)]'
              })
               console.log("setAlAction***",objArr)
               commit('getAlData',objArr) 
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
          console.log("POST res***",res)
          if(res.status==201){
            dispatch('setAlAction')
          }
      }).catch(err=>{
          console.log(err)
      })
    },

    delArticleAction: ({dispatch},id) => {
      axios({
        url:apiUrl+'/'+id,
        method:"DELETE",
      }).then(res=>{
          console.log("DELETE res***",res)
          if(res.status==200){
            dispatch('setAlAction')
          }
      }).catch(err=>{
          console.log(err)
      })
    }
  }
})

export default store; 