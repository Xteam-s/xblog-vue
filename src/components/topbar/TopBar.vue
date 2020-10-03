<template>
  <header class="top-nav">
    <div v-if="!blogger.isLogin && mode == 'user'" class="top-nav-block"> <!--user mode for home-->
      <ul class="top-nav-list">
        <li>
          <router-link to="/x/home">
            <div class="top-nav-logo"></div>
          </router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/blog">Blogger</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/archive">Archives</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/category">Categories</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/tag">Tags</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/editor">Editor</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/links">Links</router-link>
        </li>
      </ul>
    </div>
    <div v-if="!blogger.isLogin && mode == 'blogger'" class="top-nav-block"> <!--user mode for blogger-->
      <ul class="top-nav-list">
        <li>
          <router-link to="/x/home">
            <div class="top-nav-logo"></div>
          </router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/blog">Home</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/blogger">RecentBlog</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/archive">Archives</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/category">Categories</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/tag">Tags</router-link>
        </li>
        <li class="top-bar-link">
          <router-link :to="{
            name: 'about',
            path: '/x/about/:nickname',
            params: {
              nickname: blogger.nickname
            }
          }">About</router-link>
        </li>
      </ul>
    </div>

    <div v-if="blogger.isLogin" class="top-nav-block"> <!--kernel mode (after login)-->
      <ul class="top-nav-list">
        <li>
          <router-link to="/x/home">
            <div class="top-nav-logo"></div>
          </router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/home">Home</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/blog">Blogger</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/archive">Archives</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/category">Categories</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/tag">Tags</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/editor">Editor</router-link>
        </li>
        <li class="top-bar-link">
          <router-link to="/x/links">Links</router-link>
        </li>
      </ul>
    </div>
    <div class="top-nav-block">
      <ul class="top-nav-list">
        <li class="top-bar-link" v-if="!blogger.isLogin">
          <router-link to="/x/login">Login</router-link>
        </li>
        <li class="top-bar-link" v-if="blogger.isLogin">
          <div class="avatar" :style="{ backgroundImage : 'url(http://' + blogger.avatar + ')' }"></div>
          {{blogger.nickname}}
        </li>
        <li class="top-bar-link" v-if="blogger.isLogin" @click="logout">
          Log out
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    name: "TopBar",
    data(){ //调用子组件函数来赋值
      return {
      }
    },
    computed: {
      mode: function() {
        console.log(this.$store.state.mode);
        return this.$store.state.mode;
      },
      blogger: function() {
        console.log(this.$store.state.blogger);
        return this.$store.state.blogger;
      }
    },
    methods: {
      logout() {
        this.$store.commit('logout');
      }
    },
    mounted() {
      
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


  .top-bar-link .avatar {
    display: inline-block;
    width: 2vw;
    height: 2vw;
    vertical-align: middle;
    background-color: #fff;
    background: no-repeat center;
    background-size: 100%;
    border-radius: 50%;
    text-align: center;
    box-shadow: #eee 0 0 5px 2px;
  }
</style>