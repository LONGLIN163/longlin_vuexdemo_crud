import { mount,createLocalVue} from '@vue/test-utils'
import Dialog from '@/components/Compos/Dialog'
import {mockTypes} from '../mockedData'

import Vuex from 'vuex'
import ElementUI from "element-ui"
import locale from 'element-ui/lib/locale/lang/en'

const localVue = createLocalVue();
localVue.use(ElementUI,{locale});  // install ElementUI to the local vue instance
localVue.use(Vuex); // install vuex to the local vue instance

let wrapper;
describe('Component Dialog tests:', () => {

  // define them outside of breforeEach
  let actions
  let state
  let store
  let mutations
  let handleCreate
  
  beforeEach(() => {

    // mock handleCreate()
    handleCreate = jest.spyOn(Dialog.methods, 'handleCreate').mockImplementation(() => {
      // we don't need have to mock mutations here
      actions.createArticleAction()
      mutations.TOOGLE_DIALOGFORM()
    })

    // mock actions
    actions = {
      createArticleAction: jest.fn()
    }

    // mock mutations
    mutations = {
      TOOGLE_DIALOGFORM: jest.fn()
    }

    //mock state
    state={
      dialogFormVisible:true,
      types:mockTypes
    }

    // create a fake store
    store = new Vuex.Store({
      state,
      actions,
      mutations
    })

    wrapper = mount(Dialog,{
      localVue,
      store,
      propsData:{
        formMode:'', 
        form: {
            name: '',
            description: '',
            taste: '',
            color: '',
            image: '',
            isFruit: true,
            expires: '',
            price: ''
        },
         
      }
    })
  })
  
  
  it('Get Dialog snapshot', async () => {

    expect(wrapper).toMatchSnapshot()

  })
    
  it('test if handleCreate and createArticleAction have been called',async () => {

    const createBtn=await wrapper.find('#createArticleBtn');
    await createBtn.trigger('click')
    expect(handleCreate).toHaveBeenCalled()
    expect(actions.createArticleAction).toHaveBeenCalled()
    expect(mutations.TOOGLE_DIALOGFORM).toHaveBeenCalled()

  })

  it('test if TOOGLE_DIALOGFORM has been called when click cancel',async () => {

    const cancelCreateBtn=await wrapper.find('#cancelCreateBtn');
    await cancelCreateBtn.trigger('click')
    expect(mutations.TOOGLE_DIALOGFORM).toHaveBeenCalled()

  })

  it('test form elements',async () => {
    
    //test-input name field
    const nameInput=wrapper.find('[data-test="dialog_name"]');
    await nameInput.setValue("haha")
    expect(wrapper.find('[data-test="dialog_name"]').element.value).toBe('haha')

    //test-input description field
    const descriptionInput=wrapper.find('[data-test="dialog_description"]');
    await descriptionInput.setValue("xixi")
    expect(wrapper.find('[data-test="dialog_description"]').element.value).toBe('xixi')

    //test-type select field
    //const typeSelect =await wrapper.find('[data-test="taste"] .el-select .el-input__inner').element.placeholder
    //const typeSelect = wrapper.find('[data-test="taste"]>div>div>div>input').element.placeholder
    const typeSelect = wrapper.find('[data-test="taste"]>div>div>div>input')
    await typeSelect.trigger("click")
    const typeSelectItem = wrapper.findAll('[data-test="dialog_type"]').at(0)
    expect(typeSelectItem.text()).toBe('Refined')
    await typeSelectItem.trigger("click")
    expect(typeSelect.element.value).toBe('Refined')
    
    //test- picker field
    // const colorSelect = wrapper.find('[data-test="dialog_color"]>div>div>div')
    // await colorSelect.trigger("click")
    // const colorSelectInput = wrapper.find('.el-color-picker__panel .el-color-dropdown__value .el-input__inner')
    // await colorSelectInput.setValue('#B86C6C')
    // expect(colorSelectInput.element.value).toBe('#B86C6C')
    // wrapper.findAll('.el-button--mini').at(1).trigger("click").then(() => {
    //   // ***there is a bug, asyn+await would not work here, why???***
    //   const colorSelectedTxt = wrapper.find('[data-test="colorTxt"]')
    //   console.log("******",colorSelectedTxt.text())
    //   expect(colorSelectedTxt.text()).toBe('#B86C6Csss')
    // })

    //test-date picker field
    // const dateSelect = wrapper.find('[data-test="dialog_date"]>div>div')
    // dateSelect.trigger("click").then(async () => {
    //   const dateSelectCell = await wrapper.find('.el-date-picker tbody tr:first-child td:first-child')
    //   await dateSelectCell.trigger("click")
    //   console.log("******",dateSelect.text())
    // })

    /**
     * date picker and color picker will be tested in e2e
     * skip the rest form tests
     */


  })

  afterEach(() => {
    wrapper.destroy();
  });


})