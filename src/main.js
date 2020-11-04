import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from "@/router"
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/github'
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn'
import createTipPlugin from '@kangc/v-md-editor/lib/plugins/tip/index'
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index'
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index'
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index'
import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines/index'
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index'

VueMarkdownEditor.use(createKatexPlugin());
VueMarkdownEditor.use(createLineNumbertPlugin());
VueMarkdownEditor.use(createHighlightLinesPlugin());
VueMarkdownEditor.use(createCopyCodePlugin());
VueMarkdownEditor.use(createTodoListPlugin());
VueMarkdownEditor.use(createEmojiPlugin());
VueMarkdownEditor.use(createTipPlugin());
VueMarkdownEditor.use(vuepressTheme);
Vue.use(VueMarkdownEditor);
Vue.config.productionTip = false

//
// var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
// var _highlight = _interopRequireDefault(require("highlight.js/lib/highlight.js"));
// var _java = _interopRequireDefault(require("highlight.js/lib/languages/java"));
// _highlight.default.registerLanguage('java',_java.default);


new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
