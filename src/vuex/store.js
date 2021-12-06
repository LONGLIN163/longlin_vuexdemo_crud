
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
    //formMode:''
  },
  //ArticleList=Al
  mutations: {
    getAlData:(state,payload)=>{
      state.articleList=payload
      console.log("init List---",state.articleList)
    },
    delArticle:(state,aId)=>{
      state.articleList=state.articleList.filter((item)=>{
        return item.articleId!==aId
      })
      console.log("After delArticle List---",state.articleList)
    },
    showSelectArticle:(state,val)=>{
      state.previewedProduct=val
      console.log("After select an item---",state.previewedProduct)
    },
    createArticle:(state,formobj)=>{
      const newId=state.articleList.reduce((p,v) => p.id < v.id ? v : p).id
      const newArticle={
        ...formobj,
        id:newId+1
      }
      state.articleList.push(newArticle)
      console.log("After createArticle List---",state.articleList)
    },
    updateArticle:(state,updatedArticle)=>{
      console.log("After updateArticle List---",state.articleList)
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
              //console.log("data***",res.data.data) 
              const objArr=JSONPath({
                json:res.data.data,
                path:'$..[?(@.isFruit&&@.name)]'
              })
               commit('getAlData',objArr) 

            }
        }).catch(err=>{
            console.log(err)
        })
    }
  }
})

export default store; 