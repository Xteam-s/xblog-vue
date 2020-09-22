<template>

  <div>
    Username:<input type="text" v-model="username">
    Password:<input type="text" v-model="password">
    <button @click="submit">tijiao</button>
    <input name="file" type="file" accept="image/*" @change="uploadFile">
<!--    Content: <textarea name="" id="content" cols="30" rows="10" v-model="content"></textarea>-->
    Summary: <textarea name="" id="summary" cols="30" rows="10" v-model="summary"></textarea>
    Tags: <input type="text" v-model="tags">
    <button @click="savePost">保存文章</button>

    <mavon-editor v-model="content" :toolbars="toolbars" :ishljs="true" :scrollStyle="true"></mavon-editor>
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
    methods: {
      submit(){
        this.axios.post(
          'blogger/login',
          {
              username: this.username,
              password: this.password
          }
        ).then(success => {
          console.log('dlcg')
          this.$emit('login', success.data.data);
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
      }
    }
  }
</script>

<style scoped>

</style>