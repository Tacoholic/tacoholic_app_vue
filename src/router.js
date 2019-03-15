import Vue from 'vue';
import Router from 'vue-router';
import RestaurantsIndex from './views/RestaurantsIndex.vue';
import RestaurantsNew from './views/RestaurantsNew.vue';
import RestaurantsShow from './views/RestaurantsShow.vue';
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import About from "./views/About.vue";
import RestaurantsReview from "./views/RestaurantsReview.vue";


Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/restaurants', name: 'restaurant', component: RestaurantsIndex},
    { path: '/restaurants/new', name: 'restaurants-new', component: RestaurantsNew},
    { path: '/restaurants/:id', name: 'restaurants-show', component: RestaurantsShow},
    { path: '/restaurants/signup', name: 'signup', component: Signup},
    { path: '/restaurants/login', name: 'login', component: Login},
    { path: '/restaurants/logout', name: 'logout', component: Logout},
    { path: '/restaurants/about', name: 'about', component: About},
    { path: '/restaurants/:id/reviews', name: 'review', component: RestaurantsReview}
  ]
})

