const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      counter: null,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
});


app.mount("#app");
