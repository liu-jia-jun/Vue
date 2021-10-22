import Vue from "vue"
import App from "./App.vue"

new Vue({
    el: "#app",
    render: h => h(App),
    beforeCreate() {
        // 安装全局事件总线 ， $bus 就是当前的vue实例vm
        Vue.prototype.$bus = this
    }
})