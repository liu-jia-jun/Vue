<template>
  <div>
    {{ studentName }}
    <button @click="sendNameToStudent">点我向School组件传值</button>
  </div>
</template>

<script>
export default {
  name: "Student",

  data() {
    return {
      studentName: "刘佳俊",
    };
  },
  methods: {
    sendNameToStudent() {
      this.$bus.$emit("receiveFromStudent", this.studentName);
    },
    receiveFromSchool(value) {
      console.log("Student======" + value);
    },
  },
  mounted() {
    this.$bus.$on("receiveFromSchool", this.receiveFromSchool);
  },
};
</script>