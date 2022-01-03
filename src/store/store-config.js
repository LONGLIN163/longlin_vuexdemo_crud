import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
export default function createStoreConfig(){
  return {
    state,
    mutations,
    actions
  }
}