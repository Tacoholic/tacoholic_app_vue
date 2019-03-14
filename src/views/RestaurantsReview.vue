<template>
   <div class="restaurants-review">
    <h1> Leave a review! </h1>
    
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <div>
    <form v-on:submit.prevent="submit()">
    </form>  

    </div>
    <div>
      User ID: <input v-model="UserId">
    </div>
    <div>
      Restaurant ID: <input v-model="RestaurantId">
    </div>
    <div>
      Content: <input v-model="RestaurantContent">
    </div>
    <div>
      Taco Points: <input v-model="RestaurantTacoPoints">
    </div>

    <input type="submit" value="Create" class="btn btn-warning">
  <!-- </form>   -->
  </div>
</template>

<script>
  
    var axios = require('axios');

  export default {
    data: function() {
      return {
        UserId: "",
        RestaurantId: "",
        RestaurantContent: "",
        RestaurantTacoPoints: "",
        errors: []

      };
    },
    created: function() {},
    methods: {
      submit: function() {
        console.log("Create the Review...");
        var params = {
          userId: this.UserId,
          restaurantId: this.RestaurantId,
          content: this.RestaurantContent,
          tacopoints: this.RestaurantTacoPoints
          
        };
        axios.post("/api/restaurants", params)
        .then(response => {
          console.log("Success", response.data);
          this.$router.push("/");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
      }
    }
  };
</script>



