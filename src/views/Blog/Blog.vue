<template>
<div class="main">
    <div class="top-wrap">
      <div class="top-text">XBLOG</div>
      <div id="downBtn" class="downBtn" v-on:click="downScroll"></div>
      <div class="custom-background-img"></div>
    </div>
    <div class="container">
        <div id="index-links" class="index-links">
          <div class="xtitle">
            BLOGERS
          </div>
          <div class="blogers">
            <div v-for="(bloger,index) in blogerList" :key = "index" class="bloger">
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
                <div class="link-wrap">
                  <img :name="bloger.name" v-if="bloger.github != ''" class="bloger-link" src="../../assets/img/main_icon/link/github.svg"/>
                  <img :name="bloger.name" v-if="bloger.email != ''" class="bloger-link" src="../../assets/img/main_icon/link/email.svg"/>
                  <img :name="bloger.name" v-if="bloger.qq != ''" class="bloger-link" src="../../assets/img/main_icon/link/qq.svg"/>
                  <img :name="bloger.name" v-if="bloger.wechat != ''" class="bloger-link" src="../../assets/img/main_icon/link/wechat.svg"/>
                  <img :name="bloger.name" v-if="bloger.zhihu != ''" class="bloger-link" src="../../assets/img/main_icon/link/zhihu.svg"/>
                </div>
                <div :name="bloger.name + '_info'" class="info">
                  
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
                <router-link to="/x/article" class="article-img" :style="{ backgroundImage : 'url(' + article.imgurl + ')' }"></router-link>
                <div>
                  <span class="article-title">{{article.title}}</span>
                  <p class="article-abstract">{{article.abstract}}</p>
                  <div class="icon-warp">
                    <img class="icon" src="../../assets/img/main_icon/bloger.svg"/>
                      <p id="icon-text">{{article.author}}</p>
                    <img class="icon" src="../../assets/img/main_icon/tag.svg"/>
                      <p id="icon-text">{{article.tag}}</p>
                    <img class="icon" src="../../assets/img/main_icon/catagory.svg"/>
                      <p id="icon-text">{{article.theme}}</p>
                    <img class="icon" src="../../assets/img/main_icon/calendar.svg"/>
                      <p id="icon-text">{{article.time}}</p>
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

export default {
    name: "BlogList",
    data() {
      return {
          blogerList: [{ 
            name: 'Neptu',
            imgurl: require('../../assets/img/bloger/avatar.jpg'),
            url: '/x/blog#/x/bloggers',
            intro: '简介1111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
            github: 'https://baidu.com',
            email: 'xxxxx@xx',
            qq: '4894564646',
            wechat: '12345',
            zhihu: '',
          },
          { 
            name: 'Terminator',
            imgurl: require('../../assets/img/bloger/avatar2.jpg'),
            url: '',
            intro: '简介',
            github: '',
            email: 'yyyyy@yy',
            qq: '123456789',
            wechat: '',
            zhihu: 'https://baidu.com',
          },
          { 
            name: 'Xavier',
            imgurl: require('../../assets/img/bloger/avatar4.jpg'),
            url: '',
            intro: '简介',
            github: '',
            email: '',
            qq: '',
            wechat: 'abcde',
            zhihu: '',
          },
          ],
          articleList: [{
           title: 'Fibonacci',
           abstract: '斐波那契数列（Fibonacci sequence），又称黄金分割数列、因数学家莱昂纳多·斐波那契（Leonardoda Fibonacci）以兔子繁殖为例子而引入，故又称为“兔子数列”，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……在数学上，斐波那契数列以如下被以递推的方法定义：F(1)=1，F(2)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 3，n ∈ N*）在现代物理、准晶体结构、化学等领域，斐波纳契数列都有直接的应用，为此，美国数学会从 1963 年起出版了以《斐波纳契数列季刊》为名的一份数学杂志，用于专门刊载这方面的研究成果。            ',
           imgurl: require('../../assets/img/blogs/fibonacci.jpg'),
           theme: '数学',
           author: 'Terminator',
           time: '2020-7-22',
           tag: '数列',
           views: '2',
           txturl: '',
         },
         {
           title: 'Binary Serach',
           abstract: '二分查找也称折半查找（Binary Search），它是一种效率较高的查找方法。但是，折半查找要求线性表必须采用顺序存储结构，而且表中元素按关键字有序排列。',
           imgurl: require('../../assets/img/blogs/BS.jpg'),
           theme: '计算机',
           author: 'Xavier',
           time: '2020-7-22',
           tag: '算法',
           views: '3',
           txturl: '',
         },
         {
           title: 'Dijkstra',
           abstract: '迪杰斯特拉算法(Dijkstra)是由荷兰计算机科学家狄克斯特拉于1959 年提出的，因此又叫狄克斯特拉算法。是从一个顶点到其余各顶点的最短路径算法，解决的是有权图中最短路径问题。迪杰斯特拉算法主要特点是从起始点开始，采用贪心算法的策略，每次遍历到始点距离最近且未访问过的顶点的邻接节点，直到扩展到终点为止。',
           imgurl: require('../../assets/img/blogs/Dijkstra.jpg'),
           theme: '计算机',
           author: 'Neptu',
           time: '2020-7-22',
           tag: '算法',
           views: '5',
           txturl: '',
         },
         {
           title: 'JCF',
           abstract: '',
           imgurl: require('../../assets/img/blogs/github_null.jpg'),
           theme: '',
           author: '',
           time: '',
           tag: '',
           views: '',
           txturl: '',
         },
         {
           title: 'pyinstaller',
           abstract: '',
           imgurl: require('../../assets/img/blogs/github_null.jpg'),
           theme: '',
           author: '',
           time: '',
           tag: '',
           views: '',
           txturl: '',
         },
         {
           title: 'least common multiple',
           abstract: '',
           imgurl: require('../../assets/img/blogs/github_null.jpg'),
           theme: '',
           author: '',
           time: '',
           tag: '',
           views: '',
           txturl: '',
         },
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
        // blogers and articles animation
        
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

   }
  }

</script>

<style lang="css">
  @import '../../assets/css/Blog.css';
</style>