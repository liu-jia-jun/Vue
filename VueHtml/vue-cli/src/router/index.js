 
import VueRouter from "vue-router"

// 在配置路由规则时需要引入组件，
import About from "../pages/About.vue"
import Home from "../pages/Home.vue"
import News from "../pages/News.vue"
import Message from "../pages/Message.vue"
import Node from "../pages/Node.vue"
// 创建VueRouter 实例并在该实例中配置路由信息，配置之后需要配置到Vue 实例中
export default new VueRouter({
    routes:[
        {
            path:"/about",
            component:About,
             children:[
                 {
                     path:"news",
                     component:News,
                     children:[
                         {
                             path:"node/:id/:title",
                             component:Node
                         }
                     ]
                 },
                 {
                     path:"message",
                     component:Message
                 }
             ]
        },
        {
            path:"/home",
            component:Home,
            children:[
                {
                    path:"node",
                    component:Node
                }
            ]
        },
      
    ]
})