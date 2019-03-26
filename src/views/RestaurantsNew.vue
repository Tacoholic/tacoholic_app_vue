<template>
  <div class="restaurants-new">
    
    <h1>Found a new joint?  Let us know about it!</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

  <form v-on:submit.prevent="submit()">
    <div>
      Name: <input v-model="newRestaurantName">
    </div>
    <div>
      Address: <input v-model="newRestaurantAddress">
    </div>
    <div>
      Latitude: <input v-model="newRestaurantLatitude">
    </div>
    <div>
      Longitude: <input v-model="newRestaurantLongitude">
    </div>
    <div>
      Phone Number: <input v-model="newRestaurantPhoneNumber">
    </div>
    <div>
      Website Url: <input v-model="newRestaurantWebsiteUrl">
    </div>
    <div>
      Menu Url: <input v-model="newRestaurantMenuUrl">
    </div>
    <div>
      Hours: <input v-model="newRestaurantHours">
    </div>

    <input type="submit" value="Create" class="btn btn-warning">
  </form>
 </div>
</template>

<script>
  var axios = require('axios');

export default {
  data: function() {
    return {
      newRestaurantName: "",
      newRestaurantAddress: "",
      newRestaurantLatitude: "",
      newRestaurantLongitude: "",
      newRestaurantPhoneNumber: "",
      newRestaurantWebsiteUrl: "",
      newRestaurantMenuUrl: "",
      newRestaurantHours: "",
      errors: []

    };
  },
  created: function() {},
  methods: {
    submit: function() {
      console.log("Create the Restaurant...");
      var params = {
        name: this.newRestaurantName,
        address: this.newRestaurantAddress,
        latitude: this.newRestaurantLatitude,
        longitude: this.newRestaurantLongitude,
        phone_number: this.newRestaurantPhoneNumber,
        website_url: this.newRestaurantWebsiteUrl,
        menu_url: this.newRestaurantMenuUrl,
        hours: this.newRestaurantHours

        
      };
      axios.post("/api/restaurants", params)
      .then(response => {
        console.log("Success", response.data);
        this.$router.push("/Taco");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>
