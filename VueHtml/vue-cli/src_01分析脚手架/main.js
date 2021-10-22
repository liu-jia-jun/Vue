// main.js 该文件时整个项目的入口文件

// 引入Vue.js  npm 自主下载
import Vue from 'vue'

// 引入App组件，App组件作为所有组件的父组件
import App from './App.vue'

// 关闭Vue 的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象 ---- vm

new Vue({
  el: "#app",
  render: h => h(App),
})

// 创建Vue 实例时不同的写法

// new Vue({
//   render: h => h(App),
// }).$mount('#app')



/*

关于不同版本的Vue
  1. Vue.js 与 Vue。runtime.xxx.js 的区别
    (1). vue.js 是完整版的vue 包含：核心功能 + 模板解析器
    (2). vue.runtime.xxx.js 是运行版的Vue 只包含：核心功能，没有模板解析器

  2. 因为vue.runtime.xxx.js 没有模板解析器，所以不能使用template 配置项，
     需要使用render函数接收到的createElement函数去指定具体的内容

*/