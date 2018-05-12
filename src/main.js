// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome";
import "@fortawesome/fontawesome-free-solid/";
import "@fortawesome/fontawesome-free-brands/";
import moment from 'moment';

Vue.config.productionTip = false;
Vue.prototype.moment = moment;
Vue.prototype.moment.locale('pt-br');

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
