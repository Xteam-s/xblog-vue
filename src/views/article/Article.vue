<template>
  <div class="main">
    <div class="index-links">
        <div class="xtitle">
            {{article.title}}
        </div>
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
        <div class="markdown-box">
            <textarea id="markdown-box" style="display:none;" v-model="article.content"></textarea>
        </div>
    </div>
  </div>
</template>

<script>
  import $script from 'scriptjs';

  export default {
    name: "Article",
    data() {
        return {
          article: {
           title: 'Fibonacci',
           //abstract: '斐波那契数列（Fibonacci sequence），又称黄金分割数列、因数学家莱昂纳多·斐波那契（Leonardoda Fibonacci）以兔子繁殖为例子而引入，故又称为“兔子数列”，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……在数学上，斐波那契数列以如下被以递推的方法定义：F(1)=1，F(2)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 3，n ∈ N*）在现代物理、准晶体结构、化学等领域，斐波纳契数列都有直接的应用，为此，美国数学会从 1963 年起出版了以《斐波纳契数列季刊》为名的一份数学杂志，用于专门刊载这方面的研究成果。            ',
           content: "##从数据库获取文章内容",
           imgurl: require('../../assets/img/blogs/fibonacci.jpg'),
           theme: '数学',
           author: 'Terminator',
           time: '2020-7-22',
           tag: '数列',
           views: '2',
           txturl: '',
           //文章字数，阅读时长
         }
        }
    },
    method: {
      init() {
        editormd.markdownToHTML("markdown-box", {
          path: '/static/editor.md/lib/',
          //markdown        : markdown ,//+ "\r\n" + $("#append-test").text(),
          //htmlDecode      : true,       // 开启 HTML 标签解析，为了安全性，默认不开启
          htmlDecode      : "style,script,iframe",  // you can filter tags decode
          //toc             : false,
          tocm            : true,    // Using [TOCM]
          //tocContainer    : "#custom-toc-container", // 自定义 ToC 容器层
          //gfm             : false,
          //tocDropdown     : true,
          // markdownSourceCode : true, // 是否保留 Markdown 源码，即是否删除保存源码的 Textarea 标签
          emoji           : true,
          taskList        : true,
          tex             : true,  // 默认不解析
          flowChart       : true,  // 默认不解析
          sequenceDiagram : true,  // 默认不解析
        })
      }
    },
    mounted() {
      $script([
        `/static/editor.md/examples/js/jquery.min.js`,
        `/static/editor.md/examples/js/zepto.min.js`
      ], () => {
        $script(`/static/editor.md/editormd.min.js`, () => {
          this.init();
        });
      });
    }
  }
  console.log("ok");
</script>

<style scoped>
    @import '../../assets/css/Blog.css';
</style>