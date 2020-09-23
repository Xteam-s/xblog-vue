<template>
  <div class="markdown-view-box">
    <link rel="stylesheet" href="/static/editor.md/css/editormd.min.css">
    <div id="test-editor">
    </div>
    <!--button @click="test">NIHAO</!--button-->
  </div>
</template>

<script>

  import $script from 'scriptjs';

  export default {
    name: "v-editor",
    props: {
      editorConfig: {
        type: Object,
        default() {
          return {
            width: '88%',
            height: 530,
            path: '/static/editor.md/lib/', // Autoload modules mode, codemirror, marked... dependents libs path
            codeFold: true,
            saveHTMLToTextarea: true,
            searchReplace: true,
            htmlDecode: 'style,script,iframe|on*',
            emoji: true,
            taskList: true,
            tocm: true,                  // Using [TOCM]
            tex: true,                   // 开启科学公式TeX语言支持，默认关闭
            flowChart: true,             // 开启流程图支持，默认关闭
            sequenceDiagram: true,       // 开启时序/序列图支持，默认关闭,
            imageUpload: true,
            imageFormats: ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'],
            imageUploadURL: 'examples/php/upload.php',
            onload: () => {
              // eslint-disable-next-line
              // console.log('onload', this);
            },
          };
        }
      }
    },
    data(){
      return {
        editor: null
      }
    },
    methods: {
      initEditor(){
        // eslint-disable-next-line
        this.$nextTick((editorMD = window.editormd) => {
          if (editorMD) {
            // Vue 异步执行 DOM 更新，template 里面的 script 标签异步创建
            // 所以，只能在 nextTick 里面初始化 editor.md
            this.editor = editorMD('test-editor', this.editorConfig);
          }
        });
      },
      test(){
        console.log(this.editor.getMarkdown())
        console.log(this.editor.getHTML())
      }
    },
    mounted() {
      $script([
        `/static/editor.md/examples/js/jquery.min.js`,
        `/static/editor.md/examples/js/zepto.min.js`
      ], () => {
        $script(`/static/editor.md/editormd.min.js`, () => {
          this.initEditor();
        });
      });
    }
  }
</script>

<style scoped>
</style>