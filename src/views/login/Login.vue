<template>
  <div>
    Username:<input type="text" v-model="username">
    Password:<input type="text" v-model="password">
    <button @click="submit">tijiao</button>
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
      }
    }
  }
</script>

<style scoped>

</style>