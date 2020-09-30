<template>
  <div class="main">
    <div class="top-wrap">
      <div class="top-text">XBLOG</div>
      <div id="downBtn" class="downBtn" @click="downScroll"></div>
      <div class="custom-background-img"></div>
    </div>
    <div id="index-links" class="index-links">
      <div class="xtitle">
        Links
      </div>
      <div class="bloggers">
        <div v-for="(blogger,index) in bloggerList" :key="index" class="blogger">
          <div class="blogger-card-front">
            <a :href="blogger.url" class="avatar" :style="{ backgroundImage : 'url(' + blogger.imgurl + ')' }"></a>
            <div class="blogger-name">
              <span>{{blogger.name}}</span>
            </div>
          </div>
          <div class="blogger-card-back">
            <a :href="blogger.url" class="avatar" :style="{ backgroundImage : 'url(' + blogger.imgurl + ')' }"></a>
            <div class="blogger-intro">
                <span v-html="blogger.intro"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Links",
    data() {
      return {
        bloggerList: [{ 
          name: 'baidu',
          imgurl: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
          url: 'https://baidu.com',
          intro: '你在电脑前看这段文字，</br>写文字的人在百度等你。</br>N年前你来到了这个世界，</br> N年后你想改变世界。</br></br>期待你脚踏祥云，</br>与百度一起改变世界。',
         },
         { 
            name: 'mooc',
            imgurl: 'https://edu-image.nosdn.127.net/3310f128e53b406f94400f7ae6046db2.png?imageView&quality=100',
            url: 'https://www.icourse163.org',
            intro: '中国大学慕课',
         },
         { 
            name: 'csdn',
            imgurl: 'https://csdnimg.cn/cdn/content-toolbar/csdn-logo.png?v=20200416.1',
            url: 'https://blog.csdn.net/',
            intro: '专业开发者社区',
         },
         { 
            name: 'github',
            imgurl: require('../../assets/img/blogs/github_null.jpg'),
            url: 'https://github.com/',
            intro: '',
         },
         ],
      }
    },
    methods: {
      downScroll: function () {
        window.scrollTo({
          top: 800,
          behavior: "smooth"
        });
      },
    }
  }
</script>

<style scoped>
  @import '../../assets/css/Blog.css';
</style>