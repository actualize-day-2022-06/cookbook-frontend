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
        console.log(this.$route.params.id)
        axios.get("/recipes/" + this.$route.params.id + ".json").then(response => {
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
    <p>directions: {{ recipe.directions }}</p>
    <p>prep_time: {{ recipe.prep_time }}</p>
    <p>chef: {{ recipe.chef }}</p>
    <p>ingredients: {{ recipe.ingredients }}</p>
    <p>ingredients: {{ recipe.ingredients_list }}</p>
    <ol>
      <li v-for="ingredient in recipe.ingredients_list">
      {{ ingredient }}
    </li>
    </ol>
    <a v-if="recipe.owner === true" v-bind:href="`/recipes/${recipe.id}/edit`">Edit</a>
  </div>
</template>

<style></style>