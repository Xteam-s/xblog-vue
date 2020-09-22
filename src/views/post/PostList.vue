<template>
    <div>
      <markdown @change="autoSave" type="editor"></markdown>
    </div>
</template>

<script>
    import Markdown from "../components/EditorMD";
    export default {
    components: {
        Markdown
    },
    data() {
      return {
        content:''//这里是初始化是编辑器回显内容
      }
    },
    methods: {
        //当编辑器内容改变时候，会触发该事件，并返回一个html和markdown文本
        autoSave(html, text) {
            console.log(text);
            console.log(html);
        }
    }
  }
</script>