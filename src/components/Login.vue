<template>
    <el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px"
             class="demo-ruleFrom login-container">
      <h3>系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="account.username"  auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox checked class="remember">记住密码</el-checkbox>
      <el-form-item>
<el-button type="primary" @click="handleLogin" :loading="logining">登录</el-button>
        <el-button type="primary">
          <router-link to="/">返回</router-link>
        </el-button>
      </el-form-item>
    </el-form>
</template>

<script>
  export default {
    name:'登录',
    data () {
      //表单校验,默认的用户名，密码
      return {
        logining: false,
        account: {
          username:'admin',
          pwd:'123456'
        },
        /*判断：如果用户没有输入用户名，提示“请输入账号”
      判断：如果用户没有输入密码，提示“请输入密码”用于表单验证*/
        rules: {
          username: [{
            required: true, message: '请输入账号', trigger: 'blur'
          },],
          pwd: [{
            required: true, message: '请输入密码', trigger: 'blur'
          },]
        },
        checked: true
      }
    },
    methods: {
      handleLogin() {
        this.$refs.AccountFrom.validate((valid) => {
          if (valid) {
            if (this.account.username==='admin'&&this.account.pwd==='123456')
            {
              //dispatch采用Promise链式调用
              this.$store.dispatch('handleLogin',this.account).then(()=>{
                this.$notify({
                type:'success',
                message:'欢迎你，'+this.account.username+'!',
                duration:3000
              })
              this.$router.push('/')
              })
            }
            else {
              this.$message({
                type:'error',
                message:'用户名或密码错误',
                showClose:true
              })
            }
          }
          else {
            return false
          }
      })
  }}
  }
</script>

<style scoped>
  body{
    background: aquamarine;
  }
  .login-container{
    width: 350px;
    margin-left: 20%;
  }
</style>
