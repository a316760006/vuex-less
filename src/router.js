import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import { mapState } from "vuex";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/mapstate",
      name: "mapstate",
      component: ()=>import('./views/MapState.vue')
    },
    {
      path: "/mapactions",
      name: "mapactions",
      component: ()=>import('./views/MapActions.vue')
    },
    {
      path: "/mapmutations",
      name: "mapmutations",
      component: ()=>import('./views/MapMutations.vue')
    },
    {
      path: "/getuser",
      name: "getuser",
      component: ()=>import('./views/GetUser.vue')
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
