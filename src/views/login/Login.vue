<template>
  <div>
    Username:<input type="text" v-model="username">
    Password:<input type="text" v-model="password">
    <button @click="submit">tijiao</button>
    <input name="file" type="file" accept="image/*" @change="uploadFile">
  </div>
</template>

<script>

  export default {
    name: "Login",
    data(){
      return {
        username: '',
        password: ''
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
      }
    }
  }
</script>

<style scoped>

</style>