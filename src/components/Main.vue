<template>
  <div>
    <h1>主页面</h1>
    欢迎！<b @click="login">点击这里登录</b>
  </div>
</template>

<script>
    export default {
        name: "main",
      methods:{
          login(){
            this.$router.replace('/login')
          }
      }
    }
    //跳转到登录界面
</script>

<style scoped>

</style>
