<template>
    <div>
        <h2>About中的内容</h2>
        <!-- 使用to 属性来配置路由跳转信息，一个路由确定了一个组件的展示，此处为多级路由 -->
        <router-link to="/about/news">News</router-link>
         <router-link to="/about/Message">Message</router-link>
         <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:"About"
}
</script>