import { createStore } from 'vuex'

import foodModule from './modules/food/index.js'
import cartModule from './modules/cart/index.js'
import navbarModule from './modules/nav/index.js'
import invoiceModule from './modules/invoice/index.js'
import employeeModule from './modules/Employee/index.js'

const store = createStore({
  modules: {
    food: foodModule,
    cart: cartModule,
    nav: navbarModule,
    inv: invoiceModule,
    emp: employeeModule
  },
  state () {
    return {
      isLoggedIn: false,
      hasData: false,
      role: '',
      user: ''
      // isLoading: false,
      // error: null
    }
  }
  // mutations: {
  //   SET_LOADING (state, isLoading) {
  //     state.isLoading = isLoading
  //   },
  //   SET_ERROR (state, error) {
  //     state.error = error
  //   }
  // },
  // actions: {
  //   setLoading ({ commit }, isLoading) {
  //     commit('SET_LOADING', isLoading)
  //   },
  //   setError ({ commit }, error) {
  //     commit('SET_ERROR', error)
  //   }
  // }
  // mutations: {
  //   login(state) {
  //     state.isLoggedIn = true;
  //   },
  //   logout(state) {
  //     state.isLoggedIn = false;
  //   },
  // },
  // actions: {
  //   login(context) {
  //     context.commit('login')
  //   },
  //   logout(context) {
  //     context.commit('logout')
  //   }
  // },
  // getters: {
  //   isAuthenticated(state) {
  //     return state.isLoggedIn
  //   }
  // }
})

export default store
