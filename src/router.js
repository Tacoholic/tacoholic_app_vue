import Vue from 'vue';
import Router from 'vue-router';
import RestaurantsShow from './views/RestaurantsShow.vue';
import RestaurantsWeek from './views/RestaurantsWeek';
import RestaurantsMission from './views/RestaurantsMission';
import RestaurantsFunFacts from './views/RestaurantsFunFacts'
import RestaurantsIndex from './views/RestaurantsIndex.vue';
import RestaurantsNew from './views/RestaurantsNew.vue';
import RestaurantsReview from "./views/RestaurantsReview.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import About from "./views/About.vue";
import RestaurantsGoogle from "./views/RestaurantsGoogle.vue";
import Taco from "./views/Taco.vue";



Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/restaurants/login', name: 'login', component: Login},
    { path: '/restaurants/signup', name: 'signup', component: Signup},
    { path: '/restaurants', name: 'restaurant', component: RestaurantsIndex},
    { path: '/restaurants/tow', name: 'taco-of-the-week', component: RestaurantsWeek},
    { path: '/restaurants/mission', name: 'mission', component: RestaurantsMission},
    { path: '/restaurants/funfacts', name: 'funfacts', component: RestaurantsFunFacts},
    { path: '/restaurants/new', name: 'restaurants-new', component: RestaurantsNew},
    { path: '/restaurants/:place_id', name: 'restaurants-show', component: RestaurantsShow},
    { path: '/restaurants/:id/reviews', name: 'review', component: RestaurantsReview},
    { path: '/restaurants/logout', name: 'logout', component: Logout},
    { path: '/restaurants/about', name: 'about', component: About},
    { path: '/Taco', name: 'taco', component: Taco},  
    { path: '/', name: 'google', component: RestaurantsGoogle}
   
  ]
})

