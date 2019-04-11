<template>
  <div class="logout">
    <h5>Thanks for coming!</h5>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    this.$router.push("/restaurants");
  }
};
</script>


