<!-- <template>
  <div class="restaurants-index">
    <h1>Restaurants</h1>
    <div v-for="restaurant in restaurants">
      <h2>{{ restaurant.name }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  data: function() {
    return {
      restaurants: []
    };
  },
  created: function() {
    axios.get("/api/restaurants").then(response => {
      this.restaurants = response.data;
    });
  },
  methods: {}
};
</script> -->


<template>
  <div class="restaurants-index">
<button v-on:click="getRestaurants()">
  Submit
</button>
    <h1>Restaurants</h1>
    <div v-for="restaurant in restaurants">
      <h2>{{ restaurant.name }}</h2>
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
      axios.get("/api/restaurants")
      .then(response => {
        console.log(response.data);
        this.restaurants = response.data;  
      });
  },
  }
};
</script>