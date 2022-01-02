import { mount,createLocalVue} from '@vue/test-utils'
import LeftCatalog from '@/components/Compos/LeftCatalog'
import Vuex from 'vuex'

import ElementUI from "element-ui"

const localVue = createLocalVue();
localVue.use(ElementUI);  // install ElementUI to the local vue instance
localVue.use(Vuex); // install vuex to the local vue instance

let wrapper;
describe('Component LeftCatalog tests:', () => {

  // define them outside of breforeEach
  let actions
  let state
  let store

  // mock handleSelect()
  const handleSelect = jest.spyOn(LeftCatalog.methods, 'handleSelect').mockImplementation(() => {
    // we don't need have to mock mutations here
  })

  beforeEach(() => {

    const mockTypes=["Refined", "Unbranded", "Licensed", "Small", "Sleek", "Awesome"]

    // mock actions
    actions = {
      setArticleListAction: jest.fn().mockImplementation(() => {
        store.state.types=mockTypes
      })
    }

    //mock state
    state={
      articleList: [],
      types:[]
    }

    // create a fake store
    store = new Vuex.Store({
      state,
      actions
    })

    wrapper = mount(LeftCatalog,{
        localVue,
        store
    })
  })


  it('Get LeftCatalog snapshot and check init action has been called', async () => {
    expect(actions.setArticleListAction).toHaveBeenCalled()
    expect(wrapper).toMatchSnapshot()
  })
    
  it('test if handleSelect has been called',async () => {
    const selectedItem=await wrapper.findAll('[data-test="leftNav"]').at(1);
    await selectedItem.trigger('click')
    expect(handleSelect).toHaveBeenCalled()
    // check active status after being called
    expect(selectedItem.classes()).toContain('is-active')
  })

  afterEach(() => {
    wrapper.destroy();
  });


})