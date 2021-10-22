// import Vue from "vue"

// import app from "./App.vue"

// new Vue({
//     el: "#app",
//     render: h => h(App)

// })


import Vue from "vue";
import App from "./App.vue"
// 关闭Vue 的生产提示
Vue.config.productionTip = false

// new Vue({
//     el: "#app",
//     render: h => h(app)
// })

new Vue({
    el: "#app",
    render: h => h(App),
})
