import Vue from "vue";
import App from "./App.vue";
import GithubFlair from "@/components/index";

Vue.config.productionTip = false;
Vue.use(GithubFlair)
new Vue({
  render: h => h(App)
}).$mount("#app");
