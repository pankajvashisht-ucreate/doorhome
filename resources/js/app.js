import Vue from "vue";
import router from "./routes";
import ArgonDashboard from "./plugins/argon-dashboard";
Vue.config.productionTip = false;
Vue.use(ArgonDashboard);
new Vue({
    el: "#app",
    router
});
