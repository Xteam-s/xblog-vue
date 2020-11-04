<template>
  <div class="main">
    <div class="top-wrap">
      <div class="custom-background-img"></div>
    </div>
    <div class="index-links" style="">
      <div class="title">登录</div>
      <div><p>Username:</p><input type="text" v-model="username"></div>
      <div><p>Password:</p><input type="password" v-model="password"></div>
      <div class="submit-wrapper">
        <button @click="submit">登录</button>
      </div>
    </div>
    <!-- <input name="file" type="file" accept="image/*" @change="uploadFile"> -->
    <!--Content: <textarea name="" id="content" cols="30" rows="10" v-model="content"></textarea>-->
    <!-- Summary: <textarea name="" id="summary" cols="30" rows="10" v-model="summary"></textarea> -->
    <!-- Tags: <input type="text" v-model="tags"> -->
    <!-- <button @click="savePost">保存文章</button> -->

    <!-- <mavon-editor v-model="content" :toolbars="toolbars" :ishljs="true" :scrollStyle="true"></mavon-editor> -->
  </div>
</template>

<script>

  export default {
    name: "Login",
    data(){
      return {

        username: '',
        password: '',
        content: '',
        summary: '',
        postId: null,
        tags: '',

        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          mark: true, // 标记
          superscript: true, // 上角标
          quote: true, // 引用
          ol: true, // 有序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          help: true, // 帮助
          code: true, // code
          subfield: true, // 是否需要分栏
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          /* 1.3.5 */
          undo: true, // 上一步
          trash: true, // 清空
          save: true, // 保存（触发events中的save事件）
          /* 1.4.2 */
          navigation: true // 导航目录
        }
      }
    },
    computed: {
      blogger: function() {
        return this.$store.state.blogger;
      }
    },
    methods: {
      submit(){
        this.axios.post(
          '/login',
          {
              username: this.username,
              password: this.password
          }
        ).then(success => {
          console.log('dlcg')

          this.$store.commit('login',success.data.data);

          this.enterKeyupDestroyed(); //销毁事件
          this.$router.push('blogger/'+this.blogger.nickname);

          //this.$emit('login', success.data.data);
          // eslint-disable-next-line no-unused-vars
        }, failure => {
          console.log('dlsb')
        })
      },

      uploadFile(e){
        let file = e.target.files[0];
        let param = new FormData();
        param.append('file',file,file.name);
        param.append('chunk', '0')
        this.axios.post(
            'file/avatar',
            param
        ).then(response => {
          console.log(response.data)
        })
      },
      savePost(){
        this.axios.post(
            'post',
            {
              id: this.postId,
              title: 'ceshi',
              content: this.content,
              summary: this.summary,
              privacy: true,
              cover: '',
              priority: 1,
              status: 'DRAFT',
              tags: this.tags.split(',') || []
            }
        ).then(success => {
          this.postId = success.data.data.post;
          console.log(success.data);
        }, failure => {
          console.log(failure.data);
        })
      },


      enterKey(event) {
        const componentName = this.$options.name;
        if (componentName == "Login") {
            const code = event.keyCode
                ? event.keyCode
                : event.which
                    ? event.which
                    : event.charCode;
            if (code == 13) {
                this.submit();
            }
        }
      },
      enterKeyupDestroyed() {
        console.log("destroyed")
          document.removeEventListener("keyup", this.enterKey);
      },
      enterKeyup() {
          document.addEventListener("keyup", this.enterKey);
      },
    },
    mounted() {

    },
    activated() {
      if(this.blogger.isLogin) {
        this.$router.push('blogger/'+this.blogger.nickname);
      }
      else {
        this.enterKeyup();
      }
      this.$store.commit('setMode',"user");
    },
    destroyed() {
      this.enterKeyupDestroyed();
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
      width: 30vw;
      height: 60vh;
      padding: 3vh 0 0 6vw;
    }

    .main .index-links .title {
      font-size: 2.5vw;
      font-weight: bold;
    }

    .main .index-links div {
      padding: 2vh 0 2vh 0;
    }

    .main .index-links div input {
      width: 80%;
      border: 1px solid #bbb;
      border-radius: 3px;
      margin: 1.5vh 0 0 0;
      padding: 1vh;
      font-size: 3vh;
      font-family: "Microsoft soft";
    }

    .main .index-links .submit-wrapper {
      padding: 5vh 0 0 0;
    }

    .main .index-links .submit-wrapper button {
      position: relative;
      width: 12vw;
      height: 6vh;
      background-color: rgb(52, 152, 219);
      text-align: center;
      color: white;
      font-weight: bold;
      border: 0;
      border-radius: 5px;
      overflow: hidden;
    }

    .main .index-links .submit-wrapper button:hover {
      background-color: rgba(52, 152, 219, 0.9);
    }
</style>
