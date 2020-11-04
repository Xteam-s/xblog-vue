<template>
  <div>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" />
    <v-md-editor v-model="text"></v-md-editor>
  </div>
</template>

<script>
export default {
  name: "Article",
  data(){
    return {
      text: ''
    }
  },
  mounted() {
    document.querySelector('.v-md-editor__editor-wrapper ').style.display = 'none';
    document.querySelector('.v-md-editor__toolbar').style.display = 'none';
    this.axios.get(
      'post',
      {
        params:{
          id:17
        }
      }
    ).then(success => {
      this.text = success.data.data.content;
    })
  }
}
</script>

<style scoped>

</style>