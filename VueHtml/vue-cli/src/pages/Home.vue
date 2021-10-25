<template>
  <div>
    <h2>Home中的内容</h2>
    <hr />
    <ul>
      <li v-for="node in nodeList" :key="node.id">
          <!-- 路由参数的第一种写法，字符串写法 -->
        <!-- <router-link :to="`/home/node?id=${node.id}&title=${node.title}`">{{
          node.title
        }}</router-link> -->
        <!-- 路由参数的第二种写法，对象写法 -->
        <router-link :to="{
            path:'/home/node',
            query:{
                id:node.id,
                title:node.title
            }
        }">{{node.title}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      nodeList: [
        { id: "001", title: "11" },
        { id: "002", title: "12" },
        { id: "003", title: "13" },
        { id: "004", title: "14" },
      ],
    };
  },
};
</script>
