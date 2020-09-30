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
            <p id="icon-text">{{article.tag}}</p>
            <img class="icon" src="../../assets/img/main_icon/catagory.svg"/>
            <p id="icon-text">{{article.category}}</p>
            <img class="icon" src="../../assets/img/main_icon/calendar.svg"/>
            <p id="icon-text">{{article.createTime}}</p>
            <img class="icon" src="../../assets/img/main_icon/visits.svg"/>
            <p id="icon-text">{{article.views}}</p>
        </div>
        <v-editor :content = "article.content"></v-editor>
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
          article: {
            author: {
              avatar: "string",
              description: "string",
              nickname: "string"
            },
            category: "string",
            content: "string",
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
      this.$store.commit('login',{ //更改状态
        _mode: "blogger",
        _username: this.username
      });
    },
    activated() {
        var username = this.$route.params.username;
        var id = this.$route.params.articleId;
        console.log(username); //获取用户名传后端查询信息
        console.log(id);
        this.axios.get( //获取该博客
          'post',
          {params: {
            'id': id
          }
        }).then(success => {
          this.article = success.data.data;
          console.log(success.data);
        },failure => {
          console.log(failure.data);
        })
    }
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