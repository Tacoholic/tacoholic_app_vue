<template>
  <div class="restaurants-review">
    <h1> Leave a review! </h1>
    
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <div>
      <form v-on:submit.prevent="submit()">
        <div>
          Content: <input v-model="reviewContent">
        </div>
        <div>
          Taco Points: <select v-model="reviewTacoPoints">
                        <option value="1">1/2 Taco Points</option>
                        <option value="2">1 Taco Point</option>
                        <option value="3">1 1/2 Taco Points</option>
                        <option value="4">2 Taco Points</option>
                        <option value="5">2 1/2 Taco Points</option>
                        <option value="6">3 Taco Points</option>
                        <option value="7">3 1/2 Taco Points</option>
                        <option value="8">4 Taco Points</option>
                        <option value="9">4 1/2 Taco Points</option>
                        <option value="10">5 Taco Points</option>
                      </select>
        </div>

        <input type="submit" value="Create" class="btn btn-warning">
      </form>
    </div>
  </div>
</template>

<script>
  
    var axios = require('axios');

  export default {
    data: function() {
      return {
        reviewContent: "",
        reviewTacoPoints: "",
        errors: []
      };
    },
    created: function() {},
    methods: {
      submit: function() {
        console.log("Create the Review...");
        var params = {
          restaurant_id: this.$route.params.id,
          content: this.reviewContent,
          taco_points: this.reviewTacoPoints
        };

        axios.post("/api/reviews", params)
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




