<template>
  <div>
    <h1>{{ message }} {{ studentName }}同学</h1>
    <!-- 子组件向父组件进行传值 -->
    <!-- 第一种 通过定义方法-->
    <!-- <Student :getStudentName="getStudentName" /> -->
    <!-- 第二种 通过自定义事件-->
    <!-- <Student @atguigu="getStudentName" /> -->
    <!-- 第二种 通过自定义事件，第二中写法 -->
    <Student ref="student" @click.native="show" />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: { Student },
  data() {
    return {
      message: "你好啊！",
      studentName: "",
    };
  },
  methods: {
    getStudentName(name, ...params) {
      // 可以通过可变长参时进行传参
      console.log("App收到了学生名：", name, params);
      this.studentName = name;
    },
    show() {
      alert(
        "在组件标签上绑定事件，均会作为自定义事件，如果想要预定义事件（已有事件例如click等）需要使用native修饰"
      );
    },
  },
  mounted() {
    // 自定义事件的第二种写法
    this.$refs.student.$on("atguigu", this.getStudentName); //绑定自定义事件
    // this.$refs.student.$once("atguigu", this.getStudentName);// 绑定自定义事件（一次性）
  },
};
</script>