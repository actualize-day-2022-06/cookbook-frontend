<script>
  import axios from 'axios'
  export default {
    data: function () {
      return {
        message: "Welcome to Vue.js show!",
        recipe: {}
      };
    },
    created: function () {
      this.showRecipe();
    },
    methods: {
      showRecipe: function() {
        console.log('in show recipe')
        axios.get("/recipes/39.json").then(response => {
          console.log(response.data);
          this.recipe = response.data;
        })
      }
    },
  };
</script>

<template>
  <div class="recipes-show">    
    <h1>{{ recipe.id }}</h1>
    <p>title: {{ recipe.title }}</p>
    <p>description: {{ recipe.description }}</p>
    <p>prep_time: {{ recipe.prep_time }}</p>
    <p>chef: {{ recipe.chef }}</p>
    <p>ingredients: {{ recipe.ingredients }}</p>
    <p>ingredients: {{ recipe.ingredients_list }}</p>
    <ol>
      <li v-for="ingredient in recipe.ingredients_list">
      {{ ingredient }}
    </li>
    </ol>
  </div>
</template>

<style></style>