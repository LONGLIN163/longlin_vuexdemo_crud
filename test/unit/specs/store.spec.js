//import store  from '@/vuex/store'

import { mutations } from '@/vuex/store'
const { increment } = mutations

describe('mutations', () => {
  it('INCREMENT', () => {
    const state = { count: 0 }
    increment(state)
    expect(state.count).toEqual(1)
  })
})