<template>
  
  <div class="restaurants-show">
  
    <h1>{{ restaurantInfo.name }}</h1>
    <h2>Address:</h2>
    <h5><a :href="'https://www.google.com/maps/place/' + restaurantInfo.formatted_address">{{ restaurantInfo.formatted_address }}</a></h5>
    <h2>Phone Number:</h2>

    <h5><a :href="'https://www.google.com/maps/place/' + restaurantInfo.formatted_phone_number">{{ restaurantInfo.formatted_phone_number }}</a></h5>
    
    <h2>Google Rating:</h2>
    <h3>{{ restaurantInfo.rating }}</h3>

    <h2>Total ratings:</h2>
    <h3>{{ restaurantInfo.user_ratings_total }}</h3>
    
    <h2>Website:</h2>
    <h4><a :href=" restaurantInfo.website ">{{ restaurantInfo.website }}</a></h4>
    
    <h2>Hours:</h2>
    <div v-for="n in 7">
        <h4> {{ restaurantInfo.opening_hours.weekday_text[n - 1] }}</h4>

    </div>
<!--     <h4> {{ restaurantInfo.opening_hours.weekday_text[0] }}</h4>
    <h4> {{ restaurantInfo.opening_hours.weekday_text[1] }}</h4>
    <h4> {{ restaurantInfo.opening_hours.weekday_text[2] }}</h4>
    <h4> {{ restaurantInfo.opening_hours.weekday_text[3] }}</h4>
    <h4> {{ restaurantInfo.opening_hours.weekday_text[4] }}</h4>
    <h4> {{ restaurantInfo.opening_hours.weekday_text[5] }}</h4>
    <h4> {{ restaurantInfo.opening_hours.weekday_text[6] }}</h4> -->
    <!-- <h4> {{ restaurantInfo.opening_hours.open_now }}</h4> -->
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