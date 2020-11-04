import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from "@/router"
import store from "@/store"
Vue.config.productionTip = false

//
// var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
// var _highlight = _interopRequireDefault(require("highlight.js/lib/highlight.js"));
// var _java = _interopRequireDefault(require("highlight.js/lib/languages/java"));
// _highlight.default.registerLanguage('java',_java.default);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
