<script>
  import axios from 'axios'
  export default {
    data: function () {
      return {
        message: "Welcome to the edit page!",
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
      },
      updateRecipe: function() {
        console.log('updating recipe...')
        axios.patch(`/recipes/${this.recipe.id}.json`, this.recipe).then(response => {
          console.log(response.data);
          this.$router.push(`/recipes/${this.recipe.id}`);
        })
      }
    },
  };
</script>

<template>
  <div class="recipes-edit">    
    {{ message }}
    <h1>{{ recipe.id }}</h1>
    <p>title: <input type="text" v-model="recipe.title" /></p>
    <p>directions: <input type="text" v-model="recipe.directions" /></p>
    <p>prep_time: <input type="text" v-model="recipe.prep_time" /></p>
    <p>chef: <input type="text" v-model="recipe.chef" /></p>
    <p>ingredients: <input type="text" v-model="recipe.ingredients" /></p>
    <button v-on:click="updateRecipe()">Update</button>
    
  </div>
</template>

<style></style>