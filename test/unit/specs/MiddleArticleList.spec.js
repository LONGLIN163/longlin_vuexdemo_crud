import { mount,createLocalVue} from '@vue/test-utils'
import MiddleArticleList from '../../../src/components/Compos/MiddleArticleList'
import Dialog from '../../../src/components/Compos/Dialog'
import store  from '@/vuex/store'

import ElementUI from "element-ui"
const localVue = createLocalVue();
localVue.use(ElementUI);

describe('MiddleArticleList event test:', () => {

  const clickHandler = jest.fn()
  const wrapper = mount(MiddleArticleList,{
    localVue,
    store,
    propsData: { clickHandler }
  })

  it('Open and cancel dialog form:', async () => {
    await wrapper.find('#createBtn').trigger('click')
    expect(wrapper.findComponent(Dialog).exists()).toBe(true)
    // test toggleDialogForm mutation
    await wrapper.find('#cancelCreateBtn').trigger('click')
    expect(wrapper.findComponent(Dialog).exists()).toBe(false)
  })

  it('Input dialog and create article:', async () => {
    await wrapper.find('#createBtn').trigger('click')
    const dialog = wrapper.find('.el-dialog__wrapper')
    const nameInput=dialog.find('#aname')
    await nameInput.setValue('hahaha')
    expect(wrapper.find('#aname').element.value).toBe('hahaha')
    // test createArticleAction and toggleDialogForm mutation
    await wrapper.find('#createArticleBtn').trigger('click')
    expect(wrapper.findComponent(Dialog).exists()).toBe(false)
    // for testing if success added or not...
    // no idea so far, but I dont want to mock a store so far.
  })

})