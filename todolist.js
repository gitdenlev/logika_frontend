const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      todos: [],
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.newTodo);
      this.newTodo = ""; 
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    clearAllTodos() {
      this.todos = [];
    },
    },
});

app.mount("#app");
