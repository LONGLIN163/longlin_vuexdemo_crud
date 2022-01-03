import { mount,createLocalVue} from '@vue/test-utils'
import MiddleArticleList from '@/components/Compos/MiddleArticleList'
import Dialog from '@/components/Compos/Dialog'

import Vuex from 'vuex'
import ElementUI from "element-ui"
import {mockListData} from '../mockedData'

const localVue = createLocalVue();
localVue.use(ElementUI);  // install ElementUI to the local vue instance
localVue.use(Vuex); // install vuex to the local vue instance

let wrapper;
describe('Component MiddleArticleList tests:', () => {

  // define them outside of breforeEach
  let actions
  let state
  let store

  beforeEach(() => {

    // mock actions
    actions = {
      delArticleAction: jest.fn()
    }

    //mock state
    state={
      filteredList:mockListData,
      dialogFormVisible:false
    }

    // create a fake store
    store = new Vuex.Store({
      state,
      actions
    })

    
    wrapper = mount(MiddleArticleList,{
      localVue,
      store
    })
  })
  
  
  it('Get MiddleArticleList snapshot', async () => {
    expect(wrapper).toMatchSnapshot()
  })
    
  it('test if delArticleAction has been called when click del btn on table',async () => {
    const selectedItem=await wrapper.findAll('[data-test="delArticle"]').at(1);
    await selectedItem.trigger('click')
    expect(actions.delArticleAction).toHaveBeenCalled()
  })

  it('test if delArticleAction has been called when click del btn inside folded row',async () => {
    // click span anchor first
    const oneSpanAnchor=await wrapper.find('.el-table__body-wrapper tbody tr:first-child td:first-child');
    await oneSpanAnchor.trigger('click')
    // click del btn
    const selectedInnerItem=await wrapper.findAll('[data-test="delArticle"]').at(0);
    await selectedInnerItem.trigger('click')
    expect(actions.delArticleAction).toHaveBeenCalled()
  })

  it('test if component Dialog can be rendered',async () => {
    store.state.dialogFormVisible=true // can not use await here

    //Here need to create a new wrapper, because we can not test the compo controled by v-if
    const wrapper2 = mount(MiddleArticleList,{
      localVue,
      store
    })
    expect(wrapper2.findComponent(Dialog).exists()).toBe(true)
  })

  afterEach(() => {
    wrapper.destroy();
  });


})