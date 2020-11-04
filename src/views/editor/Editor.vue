<template>
  <div class="markdown-view-box">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" />
    <v-md-editor v-model="text" height="500px" @upload-image="uploadImage" :disabled-menus="[]"></v-md-editor>
  </div>
</template>

<script>
  export default {
    name: "Editor",
    data(){
      return {
        text: '',
      }
    },
    methods: {
      uploadImage(event, insertImage, files){
        console.log(files);

        // let param = new FormData();
        // param.append('file',file,file.name);
        // param.append('chunk', '0')
        // this.axios.post(
        //   'file/avatar',
        //   param
        // ).then(response => {
        //   console.log(response.data)
        // })
      }
    },
  }
</script>

<style scoped>
</style>