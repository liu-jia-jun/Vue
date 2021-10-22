<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>

    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前Student组件的实例</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  //   props: ["getStudentName"],
  data() {
    return {
      name: "张三",
      sex: "男",
      number: 0,
    };
  },
  methods: {
    sendStudentName() {
      // 第一种
      //   this.getStudentName(this.name);
      // 第二种，自定义事件
      this.$emit("atguigu", this.name, "abc");
    },
    unbind() {
      this.$off("atguigu"); //解绑一个自定义事件
      // this.$off(["atguigu","其他事件名"]) 解绑多个自定义事件
      // this.$off() 解绑所有的自定义事件
    },
    death() {
      this.$destroy(); // 销毁当前Student组件的实例，销毁后所有Student实例上的自定义事件全部都不奏效
    },
  },
};
</script>