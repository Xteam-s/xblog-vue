<template>
  <div class="main">
    <div class="index-links" style="margin: 80px">
        <div class="xtitle">
            {{article.title}}
        </div>
        <div class="icon-warp" style="width : 100%; margin : 0 auto; justify-content : center; padding: 0 0 4vh 0">
            <img class="icon" src="../../assets/img/main_icon/blogger.svg"/>
            <p id="icon-text">{{article.author.nickname}}</p>
            <img class="icon" src="../../assets/img/main_icon/tag.svg"/>
            <p id="icon-text">{{article.tags}}</p>
            <img class="icon" src="../../assets/img/main_icon/catagory.svg"/>
            <p id="icon-text">{{article.category.name}}</p>
            <img class="icon" src="../../assets/img/main_icon/calendar.svg"/>
            <p id="icon-text">{{article.createTime}}</p>
            <img class="icon" src="../../assets/img/main_icon/visits.svg"/>
            <p id="icon-text">{{article.views}}</p>
        </div>
        <v-editor :content="article.content"></v-editor>
        <div class="xtiltle" >
            Comments
        </div>
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
          id: 0,
          mode: "article",
          article: {
            author: {
              avatar: "string",
              description: "string",
              nickname: "string"
            },
            category: "string",
            content: "#出错了，请刷新",
            cover: "string",
            createTime: "2020-09-30T15:20:07.435Z",
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
           //文章字数，阅读时长
         }
        }
    },
    watch: {
      article(newVal, oldVal) {
        if(oldVal != newVal){
          this.article = newVal;
          console.log(newVal.content);
        }
        
      }
    },
    methods: {
      clear() {
        console.log("cleared");
        this.article = {
            author: {
              avatar: "string",
              description: "string",
              nickname: "string"
            },
            category: "string",
            content: "#出错了，请刷新",
            cover: "string",
            createTime: "2020-09-30T15:20:07.435Z",
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
           //文章字数，阅读时长
         }
      }
    },
    mounted() {
      
    },
    activated() {
        this.clear();
        this.$store.commit('setMode', "blogger"); //更改状态
        
        this.id = this.$route.params.articleId;
        var nickname = this.$route.params.nickname; //获取用户名传后端查询信息

        this.axios.get( //获取该博客
          'post',
        {
          params: {
            id: this.id
          }
        }).then(success => {
          this.article = success.data.data;
          console.log(success.data);
        },failure => {
          console.log(failure.data);
        })
    },
  }
</script>

<style scope>
    @import '../../assets/css/Blog.css';

  /*!important*/
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
  /*!important*/
</style>