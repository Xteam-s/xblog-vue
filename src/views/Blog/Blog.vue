<template>
  <div class="main">
    <tab-bar></tab-bar>
    <div class="top-wrap">
      <div class="top-text">XBLOG</div>
      <div id="downBtn" class="downBtn" @click="downScroll"></div>
      <div class="custom-background-img"></div>
    </div>
    <div class="container">
        <div id="index-links" class="index-links">
          <div class="xtitle">
            bloggers
          </div>
          <div class="bloggers">
            <div v-for="(blogger,index) in bloggerList" :key = "index" class="blogger">
              <div class="blogger-card-front">
                <router-link :to="{
                  name: 'blogger',
                  path: '/x/blogger/:username',
                  params: {
                    username: blogger.blogger.nickname
                  }
                }" class="avatar" :style="{ backgroundImage : 'url(http://' + blogger.blogger.avatar + ')' }"></router-link>
                <div class="blogger-name">
                  <span>{{blogger.blogger.nickname}}</span>
                </div>
              </div>
              <div class="blogger-card-back">
                <router-link :to="{
                  name: 'blogger',
                  path:'/x/blogger/:username',
                  params: {
                    username: blogger.blogger.nickname
                  }
                }" class="avatar" :style="{ backgroundImage : 'url(http://' + blogger.blogger.avatar + ')' }"></router-link>
                <div class="blogger-intro">
                  <span v-html="blogger.blogger.description"></span>
                </div>
                <div class="link-wrap">
                  <img :name="blogger.blogger.nickname" v-if="blogger.blogger.github != 'string'" class="blogger-link" src="../../assets/img/main_icon/link/github.svg"/>
                  <img :name="blogger.blogger.nickname" v-if="blogger.blogger.email != 'string'" class="blogger-link" src="../../assets/img/main_icon/link/email.svg"/>
                  <img :name="blogger.blogger.nickname" v-if="blogger.blogger.qq != 'string'" class="blogger-link" src="../../assets/img/main_icon/link/qq.svg"/>
                  <img :name="blogger.blogger.nickname" v-if="blogger.blogger.wechat != 'string'" class="blogger-link" src="../../assets/img/main_icon/link/wechat.svg"/>
                  <img :name="blogger.blogger.nickname" v-if="blogger.blogger.zhihu != 'string'" class="blogger-link" src="../../assets/img/main_icon/link/zhihu.svg"/>
                </div>
                <div :name="blogger.blogger.nickname + '_info'" class="info">
                  
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <br><br>
        <div id="index-links" class="index-links">
          <div class="xtitle">
            近期博客
          </div>
          <div class="articles">
            <div v-for="(article,index) in articleList" :key = "index" class="article">
              <div class="article-card-front">
                <router-link :to="{
                  name: 'article',
                  path:'/x/article/:username/:articleId',
                  params: {
                    username: article.author.nickname,
                    articleId: article.id
                  }
                }" class="article-img" :style="{ backgroundImage : 'url(http://' + article.cover + ')' }"></router-link>
                <div>
                  <span class="article-title">{{article.title}}</span>
                  <p class="article-abstract">{{article.summary}}</p>
                  <div class="icon-warp">
                    <img class="icon" src="../../assets/img/main_icon/blogger.svg"/>
                      <p id="icon-text">{{article.author.nickname}}</p>
                    <img class="icon" src="../../assets/img/main_icon/tag.svg"/>
                      <p id="icon-text">{{article.tags}}</p>
                    <img class="icon" src="../../assets/img/main_icon/catagory.svg"/>
                      <p id="icon-text">{{article.category}}</p>
                    <img class="icon" src="../../assets/img/main_icon/calendar.svg"/>
                      <p id="icon-text">{{article.createTime}}</p>
                    <img class="icon" src="../../assets/img/main_icon/visits.svg"/>
                      <p id="icon-text">{{article.views}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import TabBar from '@/components/topbar/TopBar';

export default {
    name: "BlogList",
    components: {
      TabBar
    },
    data() {
      return {
          bloggerList: [
            {
              blogger: {
                avatar: "string",
                description: "string",
                nickname: "string",
                github: "string",
                email: "string",
                qq: "string",
                wechat: "string",
                zhihu: "string"
              },
              customUrl: "string",
              id: 0,
              name: "string"
            }
          ],
          articleList: [
            {
              author: {
                avatar: "string",
                description: "string",
                nickname: "string"
              },
              category: "string",
              cover: "string",
              createTime: "2020-09-30T15:03:29.285Z",
              id: 0,
              likes: 0,
              shared: true,
              summary: "string",
              tags: [
                "string"
              ],
              title: "string",
              updateTime: "2020-09-30T15:03:29.285Z",
              views: 0
            }
          ]
    }
   },
   methods:{
        downScroll: function () {
            window.scrollTo({
            top: 800,
            behavior: "smooth"
            });
        },

        // Begin scroll listeners -----
        // bloggers and articles animation
        
        // fixed background image
        fixedBackgroundImage: function () {
          let delta = document.documentElement.scrollTop || document.body.scrollTop;
            document.querySelector('.custom-background-img')
            .style.backgroundPosition = "50% " + (delta / 10.8 + 50) + "%";
        },

        // onScroll: function() {
        //   let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //   fixedBackgroundImage();
        //   bodyMovement();
        //   display();
        //   window.onscroll = onScroll;
        // }
        
        // End scroll listeners -----

   },
   mounted() {
    this.axios.get( //获取所有博主
       'blog/all'
    ).then(success => {
      this.bloggerList = success.data.data;
      console.log(success.data);
    }, failure => {
      console.log(failure.data);
    })

    this.axios.get( //获取最近10条博客
      'post/recent'
    ).then(success => {
      this.articleList = success.data.data;
      console.log(success.data);
    },failure => {
      console.log(failure.data);
    })
   },
   activated() {
     this.$store.commit('setMode', "user");
   }
}
</script>

<style scoped>
  @import '../../assets/css/Blog.css';
</style>