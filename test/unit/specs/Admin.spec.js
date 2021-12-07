import { shallowMount ,mount,createLocalVue} from '@vue/test-utils'
import Admin from '../../../src/components/Pages/Admin'
import LeftCatalog from '../../../src/components/Compos/LeftCatalog'
import MiddleArticleList from '../../../src/components/Compos/MiddleArticleList'
import store  from '@/vuex/store'

import ElementUI from "element-ui"
const localVue = createLocalVue();
localVue.use(ElementUI);

describe('All components should be rendered:', () => {

  const wrapper = mount(Admin,{
    localVue,
    store
  })

  it('Admin compo should have header title', () => {
    expect(wrapper.find('.el-header').text()).toBe("longlin_vuexdemo_CR(no U)D")
  })

  it('MiddleArticleList compo should be rendered', () => {
    expect(wrapper.findComponent(MiddleArticleList).exists()).toBe(true)
  })

  it('MiddleArticleList compo should have create btn', () => {
    expect(wrapper.find('#createBtn').text()).toBe("Create Article")
  })

  it('LeftCatalog compo should be rendered', () => {
    expect(wrapper.findComponent(LeftCatalog).exists()).toBe(true)
  })

  it('LeftCatalog compo should have create btn', () => {
    expect(wrapper.find('#tasteTypes').text()).toBe("Flavours")
  })


})