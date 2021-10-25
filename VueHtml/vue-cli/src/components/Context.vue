<template>
    <div>
      <router-link to="/about">About</router-link>
      <router-link to="/home">Home</router-link>
         
           <!-- 使用<router>占位标签来表明路由匹配的组件的展示位置</router> -->
           <router-view></router-view>
    </div>
</template>
<script>

export default {
    name:"Context",
}
</script>