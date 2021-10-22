<template>
  <div>
    <h1>学校：{{ message }}</h1>
    <h2>姓名：{{ username }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>性别：{{ usersex }}</h2>
    <button @click="addAge">点我年龄++</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      message: "江西软件职业技术大学",
      age: this.userage,
    };
  },
  methods: {
    addAge() {
      console.log(this.age, this.userage);

      this.age++;
    },
  },
  //   使用props 配置项进行父子组件间的传值，传入的值不能进行修改

  //   props: ["username", "userage", "usersex"],

  // 接收的同时对数据进行类型的限制
  // props:{
  //     name:String,
  //     age:Number
  // }

  // 接收数据的同时对数据进行类型限制+ 默认值的指定+ 非空限制

  props: {
    username: {
      type: String, // 类型限制
      required: true, // 非空限制
    },
    userage: {
      type: Number,
      default: 99,
    },
    usersex: {
      type: String,
    },
  },
};
</script>