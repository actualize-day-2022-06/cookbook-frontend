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
    },
    createRecipe: function() {
      console.log('creating recipe...');
      // get data from the user
      // send that data to rails
      var params = {
        title: "BEST salad",
        ingredients: "lettuce, tomatoes, bacon",
        directions: "mix ingredients together",
        prep_time: 5,
        chef: "brian",        
      }
      axios.post("http://localhost:3000/recipes.json", params).then(response => {
        console.log(response.data);
        this.recipes.push(response.data);
      })
    }
  }
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <hr />
    <hr />
    <button v-on:click="createRecipe()">Make new recipe</button>
    <hr />
    <hr />




    <!-- <h1>{{ recipes }}</h1> -->
    <div v-for="recipe in recipes" v-bind:key="recipe.id">
      <p>{{ recipe.title }}</p>
      <p>{{ recipe.directions }}</p>
      <p>{{ recipe.image_url }}</p>

      <!-- v-on:click == @click
      v-bind:src == :src -->
      
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
