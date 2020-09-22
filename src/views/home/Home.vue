<template>
  <div class="markdown-body" v-html="htmlContent">

  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return {
        htmlContent: ''
      }
    },
    activated() {
      this.axios.get(
        'post',
        {
          params:{
            id: 16,
          }
        }
      ).then(success => {
        this.htmlContent = success.data.data.htmlContent;
        console.log(this.htmlContent)
      })
    }
  }
</script>

<style scoped>
  .markdown-body{
    width: 100%;
    height: 2000px;
  }
</style>