<template>
  <el-container>
    <el-header class="header" height="100px">
    <h3>我的网站</h3>
    <p>Vue小模块之用户登录功能</p></el-header>
    <el-main>
      <router-view></router-view>
    </el-main>

  </el-container>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .header{
    background-color: darkturquoise;
    color: aliceblue;
  }
</style>
