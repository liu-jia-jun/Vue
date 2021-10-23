<template>
    <div>
      
        
        {{message}}
        <input type="text" name="" id="" v-model="keyword">
        <button @click="getMessage">搜索</button>
    </div>
</template>
<script>

// vue中进行axios操作，发送网络请求

import axios from "axios"

export default {
    name:"Search",
    data(){
        return {
            message:"江西软件职业技术大学",
            keyword:""
        }
    },
    methods:{
        getMessage(){
            axios.get("https://api.github.com/search/users?q="+this.keyword).then((Response) =>{
                console.log("请求成功",Response.data)
                this.$bus.$emit('getItemList',Response.data.items)
            },(error)=>{
              this.$bus.$emit('getItemList',error.message)
            })
        }
    }
}
</script>