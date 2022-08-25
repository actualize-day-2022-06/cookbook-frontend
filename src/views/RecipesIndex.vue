<script>
  import axios from 'axios';
  export default {
    data: function () {
      return {
        message: "Welcome to Vue.j!!!s!",
        recipes: []
      };
    },
    created: function () {
      this.recipesIndex();
    },
    methods: {
      recipesIndex: function() {
        console.log('recipes index');
        axios.get("/recipes.json").then(response => {
          console.log(response.data);
          this.recipes = response.data;
        })
      }
    },
  };
</script>

<template>
  <div class="recipes-index">
    <h1>{{ message }}</h1>
    <!-- {{ recipes }} -->
    <div v-for="recipe in recipes">
      <p>{{ recipe.title }}</p>
      <p>{{ recipe.ingredients }}</p>
      <hr />
    </div>
  </div>
</template>

<style></style>