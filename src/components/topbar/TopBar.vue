<template>
  <header class="top-nav">
    <div class="top-nav-block">
      <ul class="top-nav-list">
        <li>
          <router-link to="/x/home">
            <div class="top-nav-logo"></div>
          </router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/bloggers">Blogger</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/recent">RecentBlog</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/editor">Editor</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/links">Links</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/home">Home</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/article">Article</router-link>
        </li>
      </ul>

    </div>
    <div class="top-nav-block">
      <ul class="top-nav-list">
        <li class="top-bar-link" v-if="!loginInfo.isLogin">
          <router-link to="/x/login">Login</router-link>
        </li>
        <li v-else>
          nickname: {{loginInfo.nickname}}
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    name: "TopBar",
    data(){
      return {
        loginInfo: {}
      }
    },
    mounted(){
      this.$on('login',loginInfo => {
        this.loginInfo = loginInfo;
      })
    }
    //动画有问题
    // created(){
    //   this.axios(
    //     '/blogger/current'
    //   ).then(success => {
    //     console.log(success.data.data)
    //     this.loginInfo = success.data.data;
    //   })
    // }
  }
</script>

<style scoped>
  li {
    list-style: none;
  }

  .top-nav {
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 49px;
    width: 100%;
    box-shadow: #eee 0 1px 5px;
    background: #ffffff;
    z-index: 10000;
  }

  .top-nav-list {
    display: flex;
    align-items: flex-start;
  }

  .top-nav-logo {
    margin-top: 12px;
    margin-left: 24px;
  }

  .top-nav-logo:before {
    content: "";
    height: 30px;
    width: 120px;
    display: inline-block;
    background: url('../../assets/img/topbar/xcraft.jpg') center no-repeat;
    background-size: 100%;
  }

  .top-nav-list li {
    margin-right: 20px;
    font-size: 18px;
    overflow: hidden;
  }

  .top-bar-link{
    display: inline-block;
    height: 100%;
    line-height: 49px;
  }
  .top-bar-link a{
    cursor: pointer;
    position: relative;
    height: 100%;
    display: inline-flex;
    font-weight: 400;
    padding: 0 10px;
    border-radius: 5px;
    /*letter-spacing: 2px;*/
    overflow: hidden;
    transition: .5s;
  }

  .top-bar-link a:hover {
    color: deepskyblue;
    background-color: #eeeeee ;
  }

  .top-bar-link a img{
    cursor: pointer;
    display: inline-block;
    height: 28px;
    width: 28px;
    margin-right: 5px;
  }

  .link-active{
    color: deepskyblue;
  }
</style>