<template>
  <div>
    <h1 ref="title">{{ message }}</h1>
    <button ref="btn" @click="showDom">按钮</button>
    <school ref="s"></school>
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  components: { School },
  name: "App",
  data() {
    return {
      message: "学校",
    };
  },
  methods: {
    showDom() {
      console.log(this.$refs.title);
      console.log(this.$refs.btn); // 获取真实的Dom元素
      console.log(this.$refs.s); // 获取School组件的实例
    },
  },
};
</script>