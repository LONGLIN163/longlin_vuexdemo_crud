import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import createStoreConfig from '@/store/store-config'
import Article from "@/apis/Article"
import {mockListData} from '../../mockedData'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('store tests:', () => {

  const resp={
    status:200,
    data:{
      data: mockListData
    }
  }
  
  const obj= {
    color: "",
    description: "",
    expires: "",
    id: 8,
    image: "",
    isFruit: true,
    name: "haha",
    price: "",
    taste: "New Type"
  }

  const storeConfig= createStoreConfig()
  const store = new Vuex.Store(storeConfig)

  // ***bug: not working with this way even re-define or bring variables into it***
  // beforeEach(async () => {
  //   storeConfig= await createStoreConfig()
  //   store = new Vuex.Store(storeConfig)
  // })

  it('test one example of mutations', async () => {
    await store.commit("TOOGLE_DIALOGFORM")
    expect(store.state.dialogFormVisible).toBe(true)
  })

  it('test action - setArticleListAction', async () => {
    const getArticleData = jest.spyOn(Article, 'getArticleData');
    getArticleData.mockResolvedValue(resp)

    await store.dispatch("setArticleListAction")
    expect(store.state.types).toContain("Sleek")
    expect(store.state.articleList).toHaveLength(2)
    expect(store.state.filteredList).toHaveLength(2)
  })

  it('test action - createArticleAction', async () => {
    const postArticleData = jest.spyOn(Article, 'postArticleData');
    
    postArticleData
    .mockImplementation((x) => {
      resp.data.data.push(x) 
      // we have to use this, otherwise the impletation would not be triggered
      return Promise.resolve({status:201}) 
    })

    await store.dispatch("createArticleAction",obj)
    //console.log("check resp1:",resp.data.data)
    expect(store.state.articleList).toHaveLength(3)
    expect(store.state.filteredList).toHaveLength(3)
    expect(store.state.types).toContain("New Type")
  })

  it('test action - delArticleAction', async () => {
    const deleteArticleData = jest.spyOn(Article, 'deleteArticleData');
    
    deleteArticleData
    .mockImplementation((id) => {
      resp.data.data=resp.data.data.filter((item) => {
        return item.id!==id
      })
      // we have to use this, otherwise the impletation would not be triggered
      return Promise.resolve({status:200}) 
    })

    await store.dispatch("delArticleAction",5)
    //console.log("check resp2:",resp.data.data)
    expect(store.state.types).not.toContain("Sleek") // test action setArticleListAction
    expect(store.state.reFresh).toBe(true) // test mutation TOOGLE_REFRESHCOMPO
  })
  
})
