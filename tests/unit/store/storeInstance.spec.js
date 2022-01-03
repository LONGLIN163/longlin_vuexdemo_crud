import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import createStoreConfig from '@/store/store-config'
import Article from "@/apis/Article"
import {mockListData} from '../../mockedData'

jest.mock(Article)

const localVue = createLocalVue();
localVue.use(Vuex);

describe('store tests:', () => {
  
  const storeConfig=createStoreConfig()
  const store = new Vuex.Store(storeConfig)

  it('test mutations here', async () => {
    await store.commit("TOOGLE_DIALOGFORM")
    expect(store.state.dialogFormVisible).toBe(true)
  })

  it('test action here', async () => {
    Article.getArticleData.mockResolvedValue({
      status:200,
      data:{
        data: mockListData
      }
    })
    await store.dispatch("setArticleListAction")
    //expect(store.state.dialogFormVisible).toBe(true)
  })
  
  })
