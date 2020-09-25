<template>
  <div class="main">
    <div class="index-links">
        <div class="xtitle">
            {{article.title}}
        </div>
        <div class="icon-warp" style="width : 100%; margin : 0 auto; justify-content : center; padding: 0 0 4vh 0">
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
        <v-editor :content = "article.content"></v-editor>
    </div>
  </div>
</template>

<script>
  import vEditor from '@/components/editormd/EditorMD';

  export default {
    name: "Article",
    components: {
      vEditor
    },
    data() {
        return {
          article: {
           title: 'Fibonacci',
           //abstract: '斐波那契数列（Fibonacci sequence），又称黄金分割数列、因数学家莱昂纳多·斐波那契（Leonardoda Fibonacci）以兔子繁殖为例子而引入，故又称为“兔子数列”，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……在数学上，斐波那契数列以如下被以递推的方法定义：F(1)=1，F(2)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 3，n ∈ N*）在现代物理、准晶体结构、化学等领域，斐波纳契数列都有直接的应用，为此，美国数学会从 1963 年起出版了以《斐波纳契数列季刊》为名的一份数学杂志，用于专门刊载这方面的研究成果。            ',
           content: "##从服务器获取文章内容\n```java\n public static void main(String args[]){\n    System.out.println();\n} \n```\n```html\n<div><p>好，很有精神</p></div>\n```",
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
    mounted() {
    
    },
    
  }
    
  console.log("ok");
</script>

<style scope>
    @import '../../assets/css/Blog.css';

  .markdown-view-box {
    width: 83vw !important;
  }

  .editormd-preview {
    width: 100% !important;
  }

  .editormd, .editormd-vertical {
      border: none !important;
  }

  .editormd-toolbar {
    display: none !important;
  }

  .CodeMirror-scroll {
    display: none !important;
  }

  .CodeMirror-scroll, .CodeMirror, .cm-s-default, .CodeMirror-wrap, .CodeMirror-empty {
      display: none !important;
  }
</style>