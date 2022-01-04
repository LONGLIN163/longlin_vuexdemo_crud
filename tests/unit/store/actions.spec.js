// actions.spec.js
import * as actions from '@/store/actions'
import {mockListData} from '../../mockedData'
import Article from "@/apis/Article"
import sinon from 'sinon'


// jest.mock('@/apis/Article', () => ({
//   getArticleData: jest.fn(() =>{
//     const resp={
//       status:200,
//       data:{
//         data: mockListData
//       }
//     }
//     return Promise.resolve(resp)
//   }),
//   postArticleData:jest.fn().mockImplementation((x) => {
//     resp.data.data.push(x) 
//     // we have to use this, otherwise the impletation would not be triggered
//     return Promise.resolve({status:201}) 
//   })
// }))

describe('test actions', () => {
  
  const resp={
    status:200,
    data:{
      data: mockListData
    }
  }

  it('setArticleListAction test',async () => {
    const getArticleData = jest.spyOn(Article, 'getArticleData');
    getArticleData.mockResolvedValue(resp)

    const commit = sinon.spy() //record func call
    const state={}
    await actions.setArticleListAction({commit,state})
    expect(commit.args).toEqual([
      ['GET_ARTICLELIST',mockListData],
      ['GET_TYPES']
    ])

  })

  it('createArticleAction test',async () => {
    const postArticleData = jest.spyOn(Article, 'postArticleData');
    postArticleData
    .mockImplementation(() => {
      return Promise.resolve({status:201}) 
    })

    const dispatch = sinon.spy() //record func call
    const state={}

    await actions.createArticleAction({dispatch,state})
    expect(dispatch.args).toEqual([
      ['setArticleListAction']
    ])
  })

  it('delArticleAction test',async () => {
    const deleteArticleData = jest.spyOn(Article, 'deleteArticleData');
    deleteArticleData
    .mockImplementation(() => {
      return Promise.resolve({status:200}) 
    })

    const commit = sinon.spy() //record func call
    const dispatch = sinon.spy() //record func call
    const state={}

    await actions.delArticleAction({dispatch,commit,state})

    expect(dispatch.args).toEqual([
      ['setArticleListAction']
    ])
    expect(commit.args).toEqual([
      ['TOOGLE_REFRESHCOMPO',true]
    ])
  })

})