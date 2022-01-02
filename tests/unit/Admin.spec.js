import { mount,createLocalVue} from '@vue/test-utils'
import Admin from '@/components/Pages/Admin'
import LeftCatalog from '@/components/Compos/LeftCatalog'
import MiddleArticleList from '@/components/Compos/MiddleArticleList'
import store  from '@/store'

import ElementUI from "element-ui"
const localVue = createLocalVue();
localVue.use(ElementUI);

describe('Page admin tests:', () => {

  const wrapper = mount(Admin,{
      localVue,
      store,
  })
 

  // check snapshot
  it('Get admin snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Admin compo should have header title', () => {
    expect(wrapper.find('.el-header').text()).toBe("longlin_vuexdemo_CR(no U)D")
  })

   // check compo rendering
  it('MiddleArticleList compo should be rendered', () => {
    expect(wrapper.findComponent(MiddleArticleList).exists()).toBe(true)
  })

  it('MiddleArticleList compo should have create btn', () => {
    expect(wrapper.find('#createBtn').text()).toBe("Create Article")
  })

  // check compo rendering
  it('LeftCatalog compo should be rendered', () => {
    expect(wrapper.findComponent(LeftCatalog).exists()).toBe(true)
  })

  it('LeftCatalog compo should have create btn', () => {
    expect(wrapper.find('#tasteTypes').text()).toBe("Flavours")
  })

})