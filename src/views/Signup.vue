<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Join the fun and signup!</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <h4>
          <label>Name:</label> 
          <input type="text" class="form-control" v-model="name">
          </h4>
        </div>
        <div class="form-group">
          <h4>
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
          </h4>
        </div>
        <div class="form-group">
          <h4>
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </h4>
        </div>
        <div class="form-group">
          <h4>
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
          </h4>
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
          };
        },
        methods: {
          submit: function() {
            var params = {
              name: this.name,
              email: this.email,
              password: this.password,
              password_confirmation: this.passwordConfirmation
            };
            axios
              .post("/api/users", params)
              .then(response => {
                this.$router.push("/restaurants/login");
              })
              .catch(error => {
                this.errors = error.response.data.errors;
              });
          }
        }
      };
      </script>

