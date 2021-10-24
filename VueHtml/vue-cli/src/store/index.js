// 引入Vue核心库
import Vue from "vue"
// 引入Vuex插件库
import Vuex from "vuex"
// 因为Vuex是vue中的插件，所以使用前需要 Vue.use(Vuex)
Vue.use(Vuex)

//  创建并暴露store
export default new Vuex.Store({
    actions:{

        add(context,value){
            
            context.commit("add",value)
        },
        subtract(context,value){
            context.commit("subtract",value)
        },
        addOdd(context,value){
            context.commit("addOdd",value)
        },
        addWait(context,value){
            context.commit("addWait",value)
        },

    },
    mutations:{
        add(state,value){
            
            state.sum += value
        },
        subtract(state,value){
            state.sum -=value
        },
        addOdd(state,value){
            if(state.sum%2){
                state.sum += value
            }
        },
        addWait(state,value){
setTimeout(function(){
    state.sum += value
},2000)
        }
    },
    state:{
        sum:0
    }
})
