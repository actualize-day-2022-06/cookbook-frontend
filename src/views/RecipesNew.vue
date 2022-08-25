<script>
  import axios from "axios";

  export default {
    data: function () {
      return {
        newRecipeParams: {},
        errors: [],
      };
    },
    methods: {
      submit: function () {
        axios
          .post("/recipes.json", this.newRecipeParams)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/recipes");
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      },
    },
  };
</script>

<template>
  <div class="recipes-new">
    <form v-on:submit.prevent="submit()">
      <h1>Make a new recipe</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="newRecipeParams.title" />
      </div>
      <div>
        <label>Ingredients:</label>
        <input type="text" v-model="newRecipeParams.ingredients" />
      </div>
      <div>
        <label>Directions:</label>
        <input type="text" v-model="newRecipeParams.directions" />
      </div>
      <div>
        <label>prep time:</label>
        <input type="text" v-model="newRecipeParams.prep_time" />
      </div>
      <div>
        <label>chef:</label>
        <input type="text" v-model="newRecipeParams.chef" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>