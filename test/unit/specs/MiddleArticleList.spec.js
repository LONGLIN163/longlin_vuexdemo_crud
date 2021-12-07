import { mount,createLocalVue} from '@vue/test-utils'
import MiddleArticleList from '../../../src/components/Compos/MiddleArticleList'
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

  // test a component's logic 
  it('MiddleArticleList click createBtn should open a dialog ', async () => {
    await wrapper.find('#createBtn').trigger('click')
    const dialog = wrapper.find('.el-dialog__wrapper')
    const text=dialog.find('#productinfo').text()
    expect(text).toBe("Product info")
  })

})