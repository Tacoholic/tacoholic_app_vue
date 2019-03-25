<template>
  
  <div class="restaurants-index">
    <h1>TACOHOLICS</h1>

    <p>"Surround yourself with tacos, not negativity.”<p>

    <h4>No need to type your info in, just click the button!</h4>



    <button v-on:click="getRestaurants()">
      Take me to the tacos!
    </button>

    <div v-for="restaurant in restaurants">
         <router-link :to=" '/restaurants/' + restaurant.place_id ">{{ restaurant.name }} </router-link>

    </div>
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
      axios.get("/google/restaurants")
      .then(response => {
        console.log(response.data);
        this.restaurants = response.data;  
      });
    }
  }
}
</script>