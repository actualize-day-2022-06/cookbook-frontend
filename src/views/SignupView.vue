<script>
  import axios from "axios";

  export default {
    data: function () {
      return {
        newUserParams: {
          password: ""
        },
        errors: [],
      };
    },
    methods: {
      submit: function () {
        axios
          .post("/users", this.newUserParams)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/login");
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      },
    },
  };
</script>

<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newUserParams.name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newUserParams.password" />
        <!-- password must be between 6 and 20 characters -->
        <!-- password under 20 characters -->
        <small v-if="newUserParams.password.length <= 20">{{ 20 - newUserParams.password.length }} characters remaining</small>
        <small class="text-danger" v-if="newUserParams.password.length > 20">Password is too long</small>
        <small class="text-success" v-if="newUserParams.password.length < 6">Password is too short</small>
      </div>
      <div>
        <label>Password confirmation:</label>
        <input type="password" v-model="newUserParams.password_confirmation" />
        <small v-if="newUserParams.password !== newUserParams.password_confirmation">Passwords must match</small>
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>