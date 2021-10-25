<template>
  <ul> 
      <li v-for="node in nodeList" :key="node.id">
         <router-link :to="`/about/news/node/${node.id}/${node.title}`">  {{node.id}}</router-link>
      </li>
      <router-view></router-view>
  </ul>
</template>

<script>
export default {
name:"News",
data(){
    return{
        nodeList: [
        { id: "001", title: "11" },
        { id: "002", title: "12" },
        { id: "003", title: "13" },
        { id: "004", title: "14" },
      ],
    }
}
}
</script>

<style>

</style>