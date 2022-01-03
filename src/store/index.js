import Vue from 'vue'
import Vuex from 'vuex'
import createStoreConfig from './store-config'
Vue.use(Vuex)

const storeConfig=createStoreConfig()
const store = new Vuex.Store(storeConfig)
export default store; 

// import Vue from 'vue'
// import Vuex from 'vuex'
// import state from './state'
// import * as mutations from './mutations'
// import * as actions from './actions'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   state,
//   mutations,
//   actions
// })

// export default store; 