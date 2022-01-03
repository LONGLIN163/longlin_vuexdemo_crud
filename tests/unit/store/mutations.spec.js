// mutations.spec.js
import * as mutations from '@/store/mutations'
import {mockListData} from '../../mockedData'

describe('test mutations', () => {

  it('GET_ARTICLELIST', () => {
    const state = { 
        articleList: [],
        filteredList:[]
    }
    mutations.GET_ARTICLELIST(state,["haha"])
    expect(state.articleList).toEqual(["haha"])
    expect(state.filteredList).toEqual(["haha"])
  })

  it('GET_TYPES', () => {
    const state = { 
        articleList: mockListData,
        types:[]
    }
    mutations.GET_TYPES(state)
    expect(state.types).toHaveLength(2)
  })

  it('TOOGLE_REFRESHCOMPO', () => {
    const state = { 
      reFresh: false,
    }
    mutations.TOOGLE_REFRESHCOMPO(state,true)
    expect(state.reFresh).toBe(true)
  })

  it('GET_LIST_BYTYPE', () => {
    const state = { 
      articleList: mockListData,
      filteredList:[]
    }
    mutations.GET_LIST_BYTYPE(state,"Sleek")
    expect(state.filteredList[0].taste).toBe("Sleek")
  })

  it('RESET_FILTEREDLIST', () => {
    const state = { 
      articleList: mockListData,
      filteredList:[]
    }
    mutations.RESET_FILTEREDLIST(state)
    expect(state.filteredList).toEqual(state.articleList)
  })

  it('TOOGLE_DIALOGFORM', () => {
    const state = { 
      dialogFormVisible: false
    }
    mutations.TOOGLE_DIALOGFORM(state)
    expect(state.dialogFormVisible).toBe(true)
  })

})