# Vue-element-login
实现的简单的登录界面vue初学
一、搭建vue+elementui写一个管理系统
1.环境的配置

(1)检查是否安装node.js.使用git命令(右击Git Bash Here) 输入node -v、返回版本号既是安装成功

(2)检查本地的npm版本：npm -v

过低的话使用 npm install  -g npm
安装的时候使用镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org


(3)全局安装webpack: npm inatall webpack -g

(4)安装vue脚手架：npm install vue-cli  -g

(5)创建空文件夹，根据模板创建项目

vue init webpack-simple 工程名字<工程名字不能用中文>
             或者创建 vue1.0 的项目： vue init webpack-simple#1.0 工程名字<工程名字不能用中文>
             会有一些初始化的设置，如下输入:
       Target directory exists. Continue? (Y/n)直接回车默认(然后会下载 vue2.0模板，这里可能需要连代理)
       Project name (vue-test)直接回车默认
       Project description (A Vue.js project) 直接回车默认
       Author 写你自己的名字
       Use sass 小颖的这个demo要用sass所以，小颖选的yes，大家可以根据自己的需求选择yes or no
2.快捷键的使用


(1)注释：c+s+/

(2)关键字查找：C+S+R

(3)搜索：C+F


3.Git命令的常用命令：

》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》
二、普通项目搭建的步骤
1.新建一个项目（新建文件夹demo）
2.打开文件夹中，右键使用命令:vue init webpack demo(工程名必须英文)新建文件就新建完成。
3.写一个登陆界面，在项目中新建page文件夹，dev本地运行，不是自己想要的效果就去配置路由的路径.
4.在文件配置查看vue和路由的版本
缺少哪些组件，在文件根目录下使用命令cnpm install axios --save  cnpm install element-ui --save

5.app.vue的图片去掉，修改main.js
6.在组件目录下创建一个Login.vue


7默认路径在路由router的index.js中配置，

三、大概页面步骤（详细见二）

四、一些小的知识点
1、this.$router.replace('/login')与push()的区别：

五、页面跳转的详细步骤（代码pln1）
1.由Main.vue界面跳转到Login.vue界面









1、Login.vue登录界面的修改

（1）实现的功能：
1)没有输入用户名，提示“请输入用户名”
2)输入用户名，不一致，提示“用户名不存在”
3)没有输入密码，提示“请输入密码”
4)只有用户名存在，输入密码，不一致，提示“密码输入错误”
5)


2、注册页面页面的跳转，配置拦截器*****
3、注册页面
4、


