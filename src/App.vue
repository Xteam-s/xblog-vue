<template>
  <div id="app">
    <tab-bar></tab-bar>
    <main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </main>
    <realm/>
  </div>
</template>

<script>
  import TabBar from '@/components/topbar/TopBar';
  import Realm from '@/components/Realm';

  export default {
    name: 'App',
    components: {
      TabBar,Realm
    },
  }
</script>

<style>
  @import "assets/css/reset.css";
</style>
