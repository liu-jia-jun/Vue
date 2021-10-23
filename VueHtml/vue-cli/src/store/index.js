// 引入Vue核心库
import Vue from "vue"
// 引入Vuex插件库
import Vuex from "vuex"
// 因为Vuex是vue中的插件，所以使用前需要 Vue.use(Vuex)
Vue.use(Vuex)

//  创建并暴露store
export default new Vuex.Store({
    actions:{},
    mutations:{},
    state:{}
})
