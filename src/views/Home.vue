<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      name: "brian",
      recipes: []
    };
  },
  created: function () {
    this.indexRecipes();
   },
  methods: {
    indexRecipes: function() {
      console.log('getting the data');
      axios.get("http://localhost:3000/recipes.json").then(response => {
        console.log(response.data);
        this.recipes = response.data
      })
    }
  }
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h1>{{ name }}</h1>
    <!-- <h1>{{ recipes }}</h1> -->
    <div v-for="recipe in recipes" v-bind:key="recipe.id">
      <p>{{ recipe.title }}</p>
      <p>{{ recipe.directions }}</p>
      <p>{{ recipe.image_url }}</p>
      <img v-bind:src="recipe.image_url" />
      <br />
      <br />
      <br />
    </div>
    <!-- <button v-on:click="indexRecipes()">get data</button> -->
  </div>
</template>

<style>
</style>
