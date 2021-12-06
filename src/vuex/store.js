
import Vue from 'vue'
import Vuex from 'vuex'
//import Apis from '@/apis/api.js'
import axios from "axios"
let apiUrl="http://localhost:3000/fruit";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    articleList: [],
  },
  //ArticleList=Al
  mutations: {
    getAlData:(state,payload)=>{
      state.articleList=payload
      console.log("init List---",state.articleList)
    },

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
               //console.log("objArr***",objArr)
               commit('getAlData',objArr) 

            }
        }).catch(err=>{
            console.log(err)
        })
    }
  }
})

export default store; 