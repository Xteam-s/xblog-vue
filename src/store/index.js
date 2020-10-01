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
      nickname: "default"
    }
  },
  mutations: {
    login(state, data) {
      state.blogger = data;
    },

    logout(state) {
      state.blogger = {
        avatar: "default",
        description: "default",
        isLogin: false,
        nickname: "default"
      }
    },

    setMode(state, data) {
      state.mode = data;
    }
  }
})

export default store