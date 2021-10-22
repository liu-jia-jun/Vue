<template>
  <div>
    <!-- 注意：这里使用属性进行传值，如果不想写死就是用v-bind 进行属性绑定 -->
    <student :username="name" :userage="age" :usersex="sex"></student>
  </div>
</template>


<script>
import Student from "./components/Student.vue";
export default {
  components: { Student },
  name: "APP",
  data() {
    return {
      name: "刘佳俊",
      age: 18,
      sex: "男",
    };
  },
};
</script>