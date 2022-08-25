<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      name: "brian",
      recipes: [],
      newRecipe: {},
      currentRecipe: {},
      errors: []
    };
  },
  created: function () {
    this.indexRecipes();
   },
  methods: {
    indexRecipes: function() {
      console.log('getting the data');
      axios.get("/recipes.json").then(response => {
        console.log(response.data);
        this.recipes = response.data
      })
    },
    createRecipe: function() {
      console.log('creating recipe...');
      console.log(this.newRecipe);
      axios.post("/recipes.json", this.newRecipe).then(response => {
        console.log(response.data);
        this.recipes.push(response.data);
      }).catch(error => {
        console.log(error.response.data);
        this.errors = error.response.data;
      })
    },
    showRecipe: function(theRecipe) {
      console.log('showing recipe...')
      console.log(theRecipe);
      this.currentRecipe = theRecipe;
      document.querySelector('#recipe-details').showModal();
    },
    updateRecipe: function() {
      console.log('updating recipe...')
      axios.patch(`/recipes/${this.currentRecipe.id}.json`, this.currentRecipe).then(response => {
        console.log(response.data)
      })
    },
    destroyRecipe: function(theRecipe) {
      // theRecipe === this.currentRecipe
      console.log('destroying recipe...');
      console.log(theRecipe.id)
      // send the proper http request to rails to delete the right recipe
      axios.delete("/recipes/" + theRecipe.id).then(response => {
        console.log(response.data);
        // find the index of this recipe in the array
        var index = this.recipes.indexOf(theRecipe);
        console.log(index);
        // delete that element from the array
        this.recipes.splice(index, 1);
      })
    }
  }
};
</script>

<template>
  <div class="home">
    <h1>{{ errors }}</h1>
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
      <p>{{ recipe.id }}</p>
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
        <p><b>id:</b> {{ currentRecipe.id }}</p>
        <p><b>title:</b> {{ currentRecipe.title }}</p>
        <p><b>ingredients:</b> {{ currentRecipe.ingredients }}</p>
        <p><b>prep_time:</b> {{ currentRecipe.prep_time }}</p>
        <p><b>chef:</b> {{ currentRecipe.chef }}</p>
        <hr />
        <hr />
        <p><b>title:</b> <input type="text" v-model="currentRecipe.title" /></p>
        <p><b>ingredients:</b> <input type="text" v-model="currentRecipe.ingredients" /></p>
        <p><b>prep_time:</b> <input type="text" v-model="currentRecipe.prep_time" /></p>
        <p><b>chef:</b> <input type="text" v-model="currentRecipe.chef" /></p>
        <button v-on:click="updateRecipe()">Update Recipe</button>
        <button v-on:click="destroyRecipe(currentRecipe)">Delete Recipe</button>

        <button>Close</button>
      </form>      
    </dialog>
    <!-- <button v-on:click="indexRecipes()">get data</button> -->
  </div>
</template>

<style>
</style>
