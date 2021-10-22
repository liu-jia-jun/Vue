<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"></MyHeader>
        <!-- <MyList
          :todos="todos"
          :handleCheck="handleCheck"
          :deleteTodo="deleteTodo"
        /> -->
        <MyList :todos="todos" />
        <MyFooter
          :todos="todos"
          @checkTodo="checkAll"
          @clearTodos="clearTodos"
        ></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 增加一个事件项
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    // 更新一个事件项
    updateTodo(id, title) {
      if (title.trim() !== "") {
        this.todos.forEach((element) => {
          if (element.id === id) {
            element.title = title;
          }
        });
      }
    },
    // 勾选一个事件项
    handleCheck(id) {
      console.log(id);
      this.todos.forEach((element) => {
        if (element.id === id) {
          element.done = !element.done;
        }
      });
    },
    // 删除一个事件项
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    // 全选和取消全选
    checkAll(flag) {
      this.todos.forEach((element) => {
        element.done = flag;
      });
    },
    clearTodos() {
      this.todos = this.todos.filter((item) => {
        return item.done != true;
      });
    },
  },
  watch: {
    todos: {
      // 开启深度监视，监视到对象内部的值是否改变
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on("updateTodo", this.updateTodo);
    this.$bus.$on("handleCheck", this.handleCheck);
    this.$bus.$on("deleteTodo", this.deleteTodo);
  },
  beforeDestroy() {
    // 在该组件被销毁之前将该组件给事件总线绑定的事件解绑
    this.$bus.$off("updateTodo");
    this.$bus.$off("handleCheck");
    this.$bus.$off("deleteTodo");
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(94, 146, 167);
  margin-right: 5px;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-edit:hover {
  color: #fff;
  background-color: rgb(94, 146, 167);
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
