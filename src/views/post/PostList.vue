<template>
  <div>
    <h2>post list</h2>
    <h2>{{this.$route.params.blogUrl}}</h2>
  </div>

</template>

<script>
  export default {
    name: "PostList",
    activated(){
      console.log('post active')
    }
  }
</script>

<style scoped>

</style>