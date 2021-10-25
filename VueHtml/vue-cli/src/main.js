import Vue from "vue"
// 引入路由插件
import VueRouter from "vue-router"
 
import App from "./App.vue"


// 引入在router文件夹下创建index.js 由该js文件来配置路由规则
import router from "./router/index.js"

// 因为路由是插件所以要use 一下
 Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
    el:"#app",
    render: h => h(App),
    router:router
     
   

})