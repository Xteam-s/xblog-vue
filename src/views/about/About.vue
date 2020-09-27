<template>
  <div class="main">
    <tab-bar :mode="mode" :username="bloger.name"></tab-bar>
    <div class="top-wrap">
      <div class="custom-background-img"></div>
    </div>
    <div class="index-links" style="">
      <div class="xtitle">About</div>
      
      
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/topbar/TopBar';

export default {
    name: "bloger",
    components: {
        TabBar
    },
    data() {
        return {
            mode: "bloger",
            bloger: {
                name: 'Neptu',
                imgurl: require('../../assets/img/bloger/avatar.jpg'),
                url: '/x/bloger',
                intro: '简介1111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
                github: 'https://baidu.com',
                email: 'xxxxx@xx',
                qq: '4894564646',
                wechat: '12345',
                zhihu: '',
            }
        }
    },
    methods: {
        downScroll: function () {
            window.scrollTo({
            top: 800,
            behavior: "smooth"
            });
        },
    },
    activated() {
        var tmp = this.$route.params.username;
        console.log(tmp); //获取用户名传后端查询信息
    }
}
</script>

<style scoped>
    @import '../../assets/css/Blog.css';

    .main {
      height: 100vh;
    }

    .main .index-links {
      position: absolute;
      left:50%;
      top:50%;
      transform: translate(-50%, -50%);

      width: 80%;
      height: 70%;
    }
</style>