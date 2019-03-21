<template>
  <div class="google">

    <h1>WE ARE HERE!!!!!!!!!!!!!!</h1>

<button v-on:click="getRestaurants()">
  Submit
</button>



     <!-- {{restaurants[0]["name"]}} -->

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      restaurants:[],
    };
  },

  methods: {
    submit: function() {

    },  
    getRestaurants: function() {
      axios.get("/api/restaurants")
      .then(response => {
        console.log(response.data);
        this.restaurants = response.data;  
      });
  },
  }
};
</script>

