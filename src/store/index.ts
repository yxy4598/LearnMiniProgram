import { createStore } from 'vuex'

import login from './login/login'

import type { IRootState } from './type'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'coderyxy',
      age: 18,
      height: 1.88
    }
  },
  mutations: {
    changeName(state) {
      state.age
    }
  },
  actions: {},
  getters: {
    accountLogin() {
      console.log('hello')
    }
  },
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
