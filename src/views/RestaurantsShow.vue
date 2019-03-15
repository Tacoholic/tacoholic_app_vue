<template>
  
  <div class="restaurants-show">
    <img :src=" restaurant.image_url " :alt="restaurant.name ">
    <h1>{{ restaurant.name }}</h1>
    <h4>Address: {{ restaurant.address }}</h4>
    <h4>Phone Number: {{ restaurant.phone_number }}</h4>
    <h4>Website Url: {{ restaurant.website_url }}</h4>
    <h4>Menu Url: {{ restaurant.menu_url }}</h4>
    <h4>Hours: {{ restaurant.hours }}</h4>  

    <div v-for="review in restaurant.reviews">
      <div>
        Name: {{review.user.name}}
      </div>
      <div>
        {{review.content}}
      </div>
      <div>
        Taco Points: {{review.taco_points}}
      </div>
      <div>
        ------------------------------
      </div>
    </div>

    
  
  </div>
</template>

<style>
  

</style>

<script>
  var axios = require('axios');

  export default {
    data: function() {
      return {
        restaurant: {
                      id: "",
                      name: "",
                      phone_number: "",
                      website_url: "",
                      menu_url: "",
                      hours: "",
                      reviews: []
                     }
      
    };
  },

  created: function() {
    axios.get("/api/restaurants/" + this.$route.params.id)
      .then(response => {
        console.log(response.data);
        this.restaurant = response.data;  
      });
  },

  methods: {
    destroyRestaurant: function() {
      axios.delete("/api/restaurants/:id" + this.restaurant.id)
        .then(response => {
          console.log("Success", response.data);
          this.$router.push("/");
        });
    } 
  }
}
</script>