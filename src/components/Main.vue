<template>
  <div>
    <h1>主页面</h1>
    欢迎你！<!--<b @click="login">点击这里登录</b>-->
    <span v-if="account">{{account.username}}
    <el-button type="warning" @click="login">注销</el-button>
    </span>
    <el-button type="success" v-else @click="login">点击登录</el-button>
  </div>
</template>

<script>
    export default {
       /* name: "main",*/
      methods:{
          login(){
            this.$router.replace('/login')
          },
          logout(){
            this.$store.dispatch('logout').then(()=>
            {
              this.$router.replace('/login')
            })
    }
      },
    computed:{
          account(){
            return this.$store.state.account
      }
    }
    }
    //跳转到登录界面
</script>

<style scoped>

</style>
