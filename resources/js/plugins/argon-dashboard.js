import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/scss/argon.scss";
import globalComponents from "./globalComponents";
import globalDirectives from "./globalDirectives";
import SidebarPlugin from "../components/Comman/SidebarPlugin/index";
import NotificationPlugin from "../components/Comman/NotificationPlugin/index";

export default {
    install(Vue) {
        Vue.use(globalComponents);
        Vue.use(globalDirectives);
        Vue.use(SidebarPlugin);
        Vue.use(NotificationPlugin);
    }
};
