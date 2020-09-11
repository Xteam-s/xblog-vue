<template>
<div class="main">
    <div class="top-wrap">
      <div class="top-text">XBLOG</div>
      <image id="downBtn" class="downBtn" v-on:click="downScroll" src="../../assets/img/downBtn.png"></image>
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
                <a v-bind:href="bloger.url" class="avatar" v-bind:style="{ backgroundImage : 'url(' + bloger.imgurl + ')' }"></a>
                <div class="bloger-name">
                  <span>{{bloger.name}}</span>
                </div>
              </div>
              <div class="bloger-card-back">
                <a v-bind:href="bloger.url" class="avatar" v-bind:style="{ backgroundImage : 'url(' + bloger.imgurl + ')' }"></a>
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
                <div v-bind:name="bloger.name + '_info'" class="info">
                  
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
                <a href="" class="article-img" v-bind:style="{ backgroundImage : 'url(' + article.imgurl + ')' }"></a>
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
          articleList: [{
           title: 'Fibonacci',
           abstract: '斐波那契数列（Fibonacci sequence），又称黄金分割数列、因数学家莱昂纳多·斐波那契（Leonardoda Fibonacci）以兔子繁殖为例子而引入，故又称为“兔子数列”，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……在数学上，斐波那契数列以如下被以递推的方法定义：F(1)=1，F(2)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 3，n ∈ N*）在现代物理、准晶体结构、化学等领域，斐波纳契数列都有直接的应用，为此，美国数学会从 1963 年起出版了以《斐波纳契数列季刊》为名的一份数学杂志，用于专门刊载这方面的研究成果。            ',
           imgurl: '../assets/img/blogs/fibonacci.jpg',
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
           imgurl: '../assets/img/blogs/BS.jpg',
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
           imgurl: '../assets/img/blogs/Dijkstra.jpg',
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
           imgurl: '../assets/img/blogs/github_null.jpg',
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
           imgurl: '../assets/img/blogs/github_null.jpg',
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
           imgurl: '../assets/img/blogs/github_null.jpg',
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

        onScroll: function() {
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          fixedBackgroundImage();
          bodyMovement();
          display();
          window.onscroll = onScroll;
        }
        
        // End scroll listeners -----

   }
  }

</script>

<style lang="css">

/*
@font-face{
  font-family: BlackOpsOne;
  src: url("../../../../fonts/BlackOpsOne/BlackOpsOne-Regular.ttf");
}
@font-face{
  font-family: Bungee;
  src: url("../../../../fonts/Bungee/Bungee-Regular.ttf");
}
@font-face{
  font-family: BungeeInline;
  src: url("../../../../fonts/BungeeInline/BungeeInline-Regular.ttf");
}
@font-face{
  font-family: BungeeShade;
  src: url("../../../../fonts/BungeeShade/BungeeShade-Regular.ttf");
}
@font-face{
  font-family: Monoton;
  src: url("../../../../fonts/Monoton/Monoton-Regular.ttf")
}
@font-face{
  font-family: Ch_F1;
  src: url("../../../../fonts/Ch_F1/Ch_F1.otf");
}
*/

html,
body {
  scroll-behavior: smooth;
  font-family: 'Open Sans', sans-serif;
}
.main {
  padding-top: 40px;
  padding-bottom: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
}

.main .top-wrap .custom-background-img {
  width: 100%;
  min-height: 1000px;
  min-width: 1920px;
  background: url("../../assets/img/bg.jpg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: 55%;
  z-index: -1;
}

.downBtn
{
  border: none;
  position: absolute;
  left: 50%;
  top: 92%;
  transform: translate(-50%,-50%);
  height: 80px;
  width: 80px;
}

.downBtn:hover
{
  border: none;
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 92%;
  transform: translate(-50%,-50%);
  animation: downBtnAni 1s linear infinite;
}

@keyframes downBtnAni
{
  0%{
    top: 92%;
  }
  25%{
    top: 91%;
  }
  50%
  {
    top: 92%;
  }
  75%{
    top: 93%;
  }
  100%
  {
    top: 92%;
  }
}

.main .top-wrap .top-text
{
  -webkit-user-select: none;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%,-50%);
  font-family: BlackOpsOne;
  font-size: 300px;
  font-weight: lighter;
  background-image: linear-gradient(125deg,#ff5252,#ff793f,#ffeaa7,#00cec9,#74b9ff,#6c5ce7);
  -webkit-background-clip: text;
  color: transparent;
  background-size: 450% 200%;
	animation: bganimation 15s infinite;
}

@keyframes bganimation{
	0%{
		background-position: 0% 50%;
	}
	50%{
		background-position: 100% 50%;
	}
	100%{
		background-position: 0% 50%;
	}
}


.main .index-links {
  padding: 10px;
  padding-bottom: 20px;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0,0,0,0.1) 0 0 5px 5px;
}
.main .index-links .xtitle {
  -webkit-user-select: none;
  width: 100%;
  height: 140px;
  line-height: 140px;
  font-size: 52px;
  font-family: Monoton;
  text-align: center;
}
.main .index-links .blogers {
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.main .index-links .blogers .bloger {
  position: relative;
  width: 280px;
  height: 200px;
  margin: 30px;
  padding: 10px;
  perspective: 1000px;
  transform-style: preserve-3d;
}
.bloger-card-front,
.bloger-card-back {
  width: 100%;
  height: 85%;
  padding-top: 12px;
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  transition: transform 1.2s;
  box-shadow: #ddd 0 0 10px 2px;
}
.main .index-links .blogers .bloger .bloger-card-front {
  border: 1px #fff solid;
}
.bloger-card-front .avatar {
  margin: 0 auto;
  display: block;
  width: 120px;
  height: 120px;
  background-color: #fff;
  background: no-repeat center;
  background-size: 100%;
  border-radius: 50%;
  text-align: center;
  box-shadow: #eee 0 0 3px 2px;
}
.bloger-name {
  -webkit-user-select: none;
  padding-top: 0.5em;
  font-size: 32px;
  overflow-wrap: break-word;
  text-align: center;
  color: teal;
}
.main .index-links .blogers .bloger .bloger-card-back {
  transform: rotateY(-180deg);
}
.bloger-card-back .avatar {
  margin-left: 20px;
  margin-top: 5px;
  margin-right: 30px;
  display: block;
  float: left;
  width: 100px;
  height: 100px;
  background-color: #fff;
  background: no-repeat center;
  background-size: 100%;
  border-radius: 50%;
  text-align: center;
  box-shadow: #eee 0 0 5px 2px;
}
/*简介*/
.bloger-intro {
  padding-top: 30px;
  width: 130px;
  height: 98px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
}

/*链接*/
.link-wrap {
  display: block;
  padding: 20px 0 0 20px;
}

.bloger-link {
  display: inline-block;
  height: 28px;
  width: 28px;
  cursor: pointer;
}

.info {
  display: none;
  position: absolute;
  height: flex;
  background-color: #fff;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  border-radius: 3px;
  box-shadow: #ddd 0 0 10px 2px;
}

.bloger:hover .bloger-card-front {
  transform: rotateY(180deg);
}
.main .index-links .blogers .bloger:hover .bloger-card-back {
  transform: rotateY(0deg);
}

@keyframes flip {
  0%,
  100% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
}


.main .index-links .articles {
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.main .index-links .articles .article {
  position: relative;
  width: 840px;
  height: 200px;
  margin: 15px;
  padding: 10px;
  perspective: 1000px;
  transform-style: preserve-3d;
  opacity: 1;
}
.article-card-front {
  width: 100%;
  height: 85%;
  padding: 10px;
  padding-bottom: 20px;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  transition: .9s;
  border-bottom: 1px solid rgba(0,0,0,0.3);
}

.article-img {
  display: flex;
  float: left;
  width: 300px;
  height: 180px;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 6px;
  margin-right: 30px;
  box-shadow: #eee 0 0 3px 1.5px;
}
.article-title {
  -webkit-user-select: none;
  font-size: 28px;
  width: 520px;
  font-weight: bold;
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: -webkit-box;
  overflow: hidden;
  word-break: break-word;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #2C3E50;
}

.article-title:hover {
  cursor: pointer;
  color: #308eec;
  font-size: 29px;
  transition: .5s;
}

.article-abstract {
  font-size: 16px;
  margin-left: 4px;
  margin-top: 10px;
  height: 87px;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  text-align: left;
  color: rgba(0,0,0,0.7);
}

.article-abstract:hover {
  cursor: pointer;
  color: #74b9ff;
  transition: .5s;
}

.icon-warp {
  display:inline-flex;
}

.icon{
  height: 28px;
  width: 28px;
  padding: 10px 0 0 0;
}

#icon-text{
  vertical-align: center;
  line-height: 28px;
  padding: 10px 25px 0 3px;
}

/**********************************************************/

.fadeInDown{
    z-index: 100;
    animation: fadeInDown 0.9s;
}
@keyframes fadeInDown {
    0% {
        opacity  : 0;
        transform: translate(0, -150px);
    }

    100% {
        opacity  : 100%;
        transform: translate(0, 0);
    }
}

.fadeIn{
    z-index: 101;
    animation: fadeIn 0.9s;
}

@keyframes fadeIn {
    0% {
        opacity  : 0;
        transform: translate(0, 150px);
    }

    100% {
        opacity  : 1;
        transform: translate(0, 0);
    }
}

.bubble{
    position: absolute;
    background: rgb(150, 150, 150);
    transform: translate(-50%,-50%);
    pointer-events: none;
    border-radius: 50%;
    animation: animate 1.5s linear forwards;
}

@keyframes animate{
    0%{
        width: 0;
        height: 0;
        opacity: 0.3;
    }
    100%{
        width: 500px;
        height: 500px;
        opacity: 0.15;
    }
}
</style>