<template>
  <li class="top-bar-link">
    <slot name="top-bar-link">
    </slot>
  </li>
</template>

<script>
  export default {
    name: "TopBarLink"
  }
</script>

<style scoped>
  .top-bar-link{
    display: inline-block;
    height: 100%;
    line-height: 49px;
    /*vertical-align: middle;*/
  }
  .top-bar-link a{
    cursor: pointer;
    position: relative;
    display: inline-flex;
    /*text-align: center;*/
    /*font-family: sans-serif;*/
    font-weight: 400;
    padding: 10px;
    border-radius: 5px;
    letter-spacing: 2px;
    overflow: hidden;
    transition: .5s;
  }

  .top-bar-link a:hover {
    cursor: pointer;
    position: relative;
    display: inline-flex;
    /*text-align: center;*/
    /*font-family: sans-serif;*/
    padding: 10px;
    color: deepskyblue;
    border-radius: 5px;
    letter-spacing: 2px;
    overflow: hidden;
  }

  .top-bar-link a img{
    cursor: pointer;
    display: inline-block;
    height: 28px;
    width: 28px;
    margin-right: 5px;
  }
</style>