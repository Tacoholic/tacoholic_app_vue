<template>
  
  <div class="restaurants-show">
  
    <h1>{{ restaurantInfo.name }}</h1>
    <h1>{{ restaurantInfo.photo }}</h1>
    <h4>Address: {{ restaurantInfo.vicinity }}</h4>
    <h4>Phone Number: {{ restaurantInfo.formatted_phone_number }}</h4>
    <h4>Google Rating: {{ restaurantInfo.rating }}</h4>
    <h4>Total ratings: {{ restaurantInfo.user_ratings_total }}</h4>
    <h4>Website: {{ restaurantInfo.website }}</h4>
  
  </div>
</template>

<style>

</style>

<script>
  var axios = require('axios');

  export default {
    data: function() {
      return {
        restaurantInfo: {}
    };
  },

  created: function() {
    axios.get("/google/restaurants/" + this.$route.params.place_id)
      .then(response => {
        console.log(response.data);
        this.restaurantInfo = response.data;  
      });
  },

  methods: { 
  }
}
</script>

<!-- this.$route.params.id -->