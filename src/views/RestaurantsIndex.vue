<template>
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
</script>