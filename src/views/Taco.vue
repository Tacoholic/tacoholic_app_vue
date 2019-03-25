<template>
  <div>
    <h1><!-- 
      Big Wig Taco's and Burritos -->
       {{restaurants}}
    </h1>
    <div>
    <h3>Address:</h3> 
    <h5>770 N LaSalle Dr, Chicago, IL 60654</h5>
    <a href="https://www.google.com/maps/dir/Actualize+Coding+Bootcamp,+West+Ohio+Street,+Chicago,+IL/Big+Wig+Tacos+%26+Burritos,+770+N+LaSalle+Dr,+Chicago,+IL+60654/@41.8942529,-87.6363752,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x880e2cb442fe0967:0x8ebe0574fdbab276!2m2!1d-87.6348295!2d41.8921364!1m5!1m1!1s0x880fd34ca3bc4007:0x88f221acb96dc237!2m2!1d-87.6330354!2d41.8963589!3e2">Directions!</a>
    </div>
    <h3>Hours:</h3> 
    <h5>Open Daily, 11am-5am</h5>
    <h3>Phone Number:</h3>   
    <h5>(312) 624-9568</h5>
    <div>
    <h3>Menu:</h3> 
    <a href="https://www.bigwigtacos.com/menu">Click here for the Menu!</a>
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