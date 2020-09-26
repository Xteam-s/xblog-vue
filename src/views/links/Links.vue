<template>
  <div class="main">
    <tab-bar :mode="mode" :username="username"></tab-bar>
    <div class="top-wrap">
      <div class="top-text">XBLOG</div>
      <div id="downBtn" class="downBtn" @click="downScroll"></div>
      <div class="custom-background-img"></div>
    </div>
    <div id="index-links" class="index-links">
      <div class="xtitle">
        Links
      </div>
      <div class="blogers">
        <div v-for="(bloger,index) in blogerList" :key="index" class="bloger">
          <div class="bloger-card-front">
            <a :href="bloger.url" class="avatar" :style="{ backgroundImage : 'url(' + bloger.imgurl + ')' }"></a>
            <div class="bloger-name">
              <span>{{bloger.name}}</span>
            </div>
          </div>
          <div class="bloger-card-back">
            <a :href="bloger.url" class="avatar" :style="{ backgroundImage : 'url(' + bloger.imgurl + ')' }"></a>
            <div class="bloger-intro">
                <span v-html="bloger.intro"></span>
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
    name: "Links",
    components: {
      TabBar
    },
    data() {
      return {
        mode: "user",
        username: "default",
        blogerList: [{ 
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