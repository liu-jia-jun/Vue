<template>
  <div>
    {{ schoolName }}
    <button @click="sendNameToStudent">点我向Student组件传值</button>
  </div>
</template>

<script>
export default {
  name: "School",

  data() {
    return {
      schoolName: "江西软件职业技术大学",
    };
  },
  methods: {
    sendNameToStudent() {
      this.$bus.$emit("receiveFromSchool", this.schoolName);
    },

    receiveFromStudent(value) {
      console.log("School======" + value);
    },
  },
  mounted() {
    this.$bus.$on("receiveFromStudent", this.receiveFromStudent);
  },
};
</script>