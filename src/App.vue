<template>
  <div id="app">
    <tab-bar></tab-bar>
    <main>
      <keep-alive>
        <router-view></router-view>   
      </keep-alive> 
    </main>
  </div>
</template>

<script>
  import TabBar from '@/components/topbar/TopBar';

  export default {
    name: 'App',
    components: {
      TabBar
    },
  }
</script>

<style>
  @import "assets/css/reset.css";

</style>
