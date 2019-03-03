// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import {library, dom} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import moment from 'moment';

library.add(fas, fab);
dom.watch();

Vue.config.productionTip = false;
Vue.prototype.$moment = moment;
Vue.prototype.$moment.locale('pt-br');

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
