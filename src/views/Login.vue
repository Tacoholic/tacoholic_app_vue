
<template>
  <div class="login">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
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
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/restaurants");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>

