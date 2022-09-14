<script>
  import axios from 'axios';
  export default {
    data: function () {
      return {
        message: "Welcome to Vue.j!!!s!",
        recipes: [], 
        searchTerm: "",       
        currentRecipe: {}
      };
    },
    mounted: function () {
      this.recipesIndex();
      var i = 0;
      // setInterval(function() {
      //   console.log('something')
      //   document.querySelector("body").style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);        
      //   document.querySelector("h5").style.fontSize = `${i}px`
      //   i += 2
      // }, 1000)
      // .style.css.backgroundColor = 'blue';
    },
    methods: {
      search: function() {
        console.log('searching...')
        axios.get(`/recipes.json?search=${this.searchTerm}`).then(response => {
          console.log(response.data);
          this.recipes = response.data;
        })
      },
      recipesIndex: function() {
        console.log('recipes index');
        axios.get("/recipes.json").then(response => {
          console.log(response.data);
          this.recipes = response.data;
        })
      },      
      selectRecipe: function(recipe) {
        // console.log('selecting recipe...')
        this.currentRecipe = recipe;
      }
    },
  };
</script>

<template>
  <div class="recipes-index">
    <input type="text" v-model="searchTerm" />
    <button v-on:click="search()">Search</button>


    <div class="row">
      <div class="col-sm-6" 
        v-for="recipe in recipes" 
        v-bind:class="{selected: recipe === currentRecipe}" 
        v-on:click="selectRecipe(recipe)"
        v-on:mouseover="selectRecipe(recipe)"
        v-on:mousemove="selectRecipe(recipe)"
      >
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

<style>
  .selected {
    background-color: steelBlue;
  }
</style>