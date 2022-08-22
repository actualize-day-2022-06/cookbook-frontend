<script>
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      name: "brian"
    };
  },
  created: function() {},
  methods: {}
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h1>{{ name }}</h1>
    <button>new button</button>
  </div>
</template>

<style></style>
