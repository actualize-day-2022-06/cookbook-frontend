<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      name: "brian",
      recipes: [],
      newRecipe: {},
      currentRecipe: {}
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
      // var params = {
      //   title: this.newRecipe.title,
      //   ingredients: "lettuce, tomatoes, bacon",
      //   directions: "mix ingredients together",
      //   prep_time: 5,
      //   chef: "brian",        
      // }
      console.log(this.newRecipe);
      axios.post("http://localhost:3000/recipes.json", this.newRecipe).then(response => {
        console.log(response.data);
        this.recipes.push(response.data);
      })
    },
    showRecipe: function(theRecipe) {
      console.log('showing recipe...')
      console.log(theRecipe);
      this.currentRecipe = theRecipe;
      document.querySelector('#recipe-details').showModal();
    }
  }
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <hr />
    <hr />
    <p>Title: <input type="text" v-model="newRecipe.title" /></p>
    <p>ingredients: <input type="text" v-model="newRecipe.ingredients" /></p>
    <p>directions: <input type="text" v-model="newRecipe.directions" /></p>
    <p>prep_time: <input type="text" v-model="newRecipe.prep_time" /></p>
    <p>chef: <input type="text" v-model="newRecipe.chef" /></p>
    <button v-on:click="createRecipe()">Make new recipe</button>
    <hr />
    <hr />
    <!-- <h1>{{ recipes }}</h1> -->
    <div v-for="recipe in recipes" v-bind:key="recipe.id">
      <p>{{ recipe.title }}</p>
      <p>{{ recipe.directions }}</p>
      <p>{{ recipe.image_url }}</p>
      <button v-on:click="showRecipe(recipe)">More Info</button>
      <!-- <img v-bind:src="recipe.image_url" /> -->
      <br />
      <br />
      <br />
    </div>

    <dialog id="recipe-details">
      <form method="dialog">
        <p><b>title:</b> {{ currentRecipe.title }}</p>
        <p><b>ingredients:</b> {{ currentRecipe.ingredients }}</p>
        <p><b>prep_time:</b> {{ currentRecipe.prep_time }}</p>
        <p><b>chef:</b> {{ currentRecipe.chef }}</p>
        <button>Close</button>
      </form>      
    </dialog>
    <!-- <button v-on:click="indexRecipes()">get data</button> -->
  </div>
</template>

<style>
</style>
