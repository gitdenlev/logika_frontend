const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      user: "",
    };
  },

  mounted() {
    const savedName = localStorage.getItem("user");
    if (savedName) {
      this.user = savedName;
    }
  },
  methods: {
    logoutUser() {
      localStorage.removeItem("user");
      window.location.href = "/index.html";
    },
  },
});

app.mount("#app");
