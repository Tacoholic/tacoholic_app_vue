<template>
  
  <div class="restaurants-index">
    <h1>TACOHOLIC</h1>

<img src="https://i.etsystatic.com/14519444/r/il/675b9a/1394634104/il_570xN.1394634104_s245.jpg">
 <!--    <p>"Surround yourself with tacos, not negativity.”</p> -->

    <h4>Click button!</h4>

    <button v-on:click="getRestaurants()">
      <h5>Take me to the tacos!</h5>
    </button>

    <div v-for="restaurant in restaurants">
         <h3><router-link :to=" '/restaurants/' + restaurant.place_id ">{{ restaurant.name }}</router-link></h3>

    </div>
    </div>
</template>
<style>

body {
  background-image: url("/img/new_background.jpg");
}

h1 {
  font-family: 'Crete Round', serif;
}

h2 {
  font-family: 'Crete Round', serif;
}

h3 {
  font-family: 'Crete Round', serif;
}

h4 {
  font-family: 'Crete Round', serif;
}

h5 {
  font-family: 'Crete Round', serif;
}


  .Restaurant-index .card:hover {
    box-shadow: 8px 8px 35px 8px #004d00
  }

</style>
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

