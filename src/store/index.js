import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    mode: "user",
    blogger: {
      avatar: "default",
      description: "default",
      isLogin: false,
      nickname: "default",
      customUrl: "default"
    },
  },
  mutations: {
    login(state, payload) {
      state.blogger = payload;
    },

    logout(state) {
      state.blogger = {
        avatar: "default",
        description: "default",
        isLogin: false,
        nickname: "default"
      }
    },

    setMode(state, payload) {
      state.mode = payload;
    },
  },
  actions: {
    
  }
})

export default store