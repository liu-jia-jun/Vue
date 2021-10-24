<template>
    <div>
        <h2>About中的内容</h2>
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