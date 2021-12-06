
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
      let foundIndex = state.articleList.findIndex(x => x.id == updatedArticle.id);
      state.articleList[foundIndex] = updatedArticle;
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