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
    <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
    <!-- {{ recipes }} -->
    <div v-for="recipe in recipes">
      <p>{{ recipe.id }}</p>
      <!-- <p> <a v-bind:href="'/recipes/' + recipe.id">{{ recipe.title }}</a> </p> -->
      <p> <a v-bind:href="`/recipes/${recipe.id}`">{{ recipe.title }}</a> </p>
      <p>{{ recipe.ingredients }}</p>
      <hr />
    </div>
  </div>
</template>

<style></style>