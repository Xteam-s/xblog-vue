<template>
  <div id="app">
    <main>
      <keep-alive>
        <router-view></router-view>   
      </keep-alive> 
    </main>
  </div>
</template>

<script>

  export default {
    name: 'App',
  }
</script>

<style>
  @import "assets/css/reset.css";

</style>
