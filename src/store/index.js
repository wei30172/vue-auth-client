import { createStore } from 'vuex'
import { userSignup, userLogin, userLogout, userAuth } from '../api/userAPI'

const store = createStore({
  state: {
    user: null,
    authIsReady: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload
    }
  },
  actions: { // async code
    async signup(context, { email, password }) {
      const res = await userSignup({ email, password })
      if (res.errors) {
        return res.errors
      }
      if (res.user) {
        context.commit('setUser', res.user)
      }
    },
    async login(context, { email, password }) {
      const res = await userLogin({ email, password })
      if (res.errors) {
        return res.errors
      }
      if (res.user) {
        context.commit('setUser', res.user)
      }
    },
    async logout(context) {
      await userLogout()
      context.commit('setUser', null)
    },
    async checkAuth(context) {
      let res = await userAuth()
      if (res) {
        context.commit('setAuthIsReady', true)
      }
      if (res.authVerify && res.user) {
        context.commit('setUser', res.user.email)
      }
    }
  },
  // example
  // state: {
  //   points: 0
  // },
  // mutations: {
  //   updatePoints(state, payload) {
  //     state.points = state.points + payload
  //   }
  // },
})

export default store