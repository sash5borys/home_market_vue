import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";

import router from "./router";
import store from "./store";
import clickOutside from "@/directives/clickOutside";

import App from "./App.vue";

Vue.directive("click-outside", clickOutside);

Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
