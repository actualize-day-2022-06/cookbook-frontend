<script>
  import axios from 'axios';
  export default {
    data: function () {
      return {
        message: "Welcome to Vue.j!!!s!",
        recipes: [],
        searchTerm: "t"
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
      },
      filterRecipes: function() {
        return this.recipes.filter(recipe => {
          var lowerSearchTerm = this.searchTerm.toLowerCase();
          var lowerRecipeTitle = recipe.title.toLowerCase();
          return lowerRecipeTitle.includes(lowerSearchTerm);
        })
      }
    },
  };
</script>

<template>
  <div class="recipes-index">
    Search: <input type="text" v-model="searchTerm" />

    <div class="row">
      <div class="col-sm-6" v-for="recipe in filterRecipes()">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ recipe.title }}</h5>
            <p class="card-text">{{ recipe.directions }}</p>
            <a v-bind:href="`/recipes/${recipe.id}`" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
            <br />
      </div>
    </div>
    <!-- {{ recipes }} -->
    
  </div>
</template>

<style></style>