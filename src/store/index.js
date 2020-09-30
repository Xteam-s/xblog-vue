import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    mode: "user",
    username: "default"
  },
  mutations: {
    login(state, data) {
      state.mode = data._mode;
      state.username = data._username;
    }
  }
})

export default store