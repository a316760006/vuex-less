import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"
console.log(process.env.NODE_ENV)

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
