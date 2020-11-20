import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import router from "./router/index";
//import AuthService from './services/AuthService';
import { showError, showGenericError } from "./util/modal";
import VCalendar from "v-calendar";

import { setupCalendar } from "v-calendar";

//import UserService from './services/UserService';

/* var authService = new AuthService();
var userService = new UserService();

//ROUTE AUTH CONFIGURATION
//All route names which an admin may not access (see /router/index.js).
var adminBlacklistedRoutes = [
  "meet",
  "meets-register",
  "meetrequests",
  "meethistory",
  "meets",
  "swimmers",
  "eventrequests",
  "trainingCreate",
  "trainingid",
  "training"
];

//All route names which a coach may not access (see /router/index.js).
var coachBlacklistedRoutes = [
  "meet",
  "user-register",
  "meets-register",
  "news-create",
  "meetrequests",
  "meethistory",
  "meets",
  "notificationsCreate"
];

//All route names which a swimmer may not access (see /router/index.js).
var swimmerBlacklistedRoutes = [
  "user-register",
  "meet-register",
  "news-create",
  "notifcationsCreate",
  "swimmers",
  "eventrequests",
  "trainingCreate",
  "trainingid",
  "training"
] */

const apiUrl = "http://localhost:5000";

//AUTOMATICALLY ADD THE ACCESS TOKEN FOR EACH API CALL IF POSSIBLE
axios.interceptors.request.use((config) => {
  config.url = apiUrl.concat(config.url);

  if (localStorage.getItem("access_token") != null) {
    config.headers.Authorization =
      "Bearer " + localStorage.getItem("access_token");
  }
  return config;
});

//IF THE TOKEN IS EXPIRED, AUTOMATICALLY LOGOUT USER
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      showGenericError();
    } else {
      if (error.response.status === 401) {
        // UNAUTHORIZED (Because token is no longer valid, so redirect user to logout to remove invalid token)
        if (router.currentRoute.name != "login") {
          showError("Your session has expired. Please login again.");
        }
        // Login request failed
        else if (error.response.config.url.indexOf("authenticate") !== -1) {
          showError(error.response.data);
        }
        if (localStorage.getItem("access_token") != null) {
          localStorage.removeItem("access_token");
        }
        router.push("/logout");
      } else if (error.response.status === 403) {
        // A user is not permitted to access this endpoint
        showError(error.response.data);
      } else {
        showError();
      }
    }
    return Promise.resolve({ error });
  }
);

//CHECK IF THE USER IS AUTHORIZED BEFORE SWITCHING BETWEEN COMPONENTS
/* router.beforeEach((to, from, next) => {

  if(to.name == 'logout') {
    if(localStorage.getItem("access_token") != null) {
      localStorage.removeItem("access_token");
    }
    next({name: 'login'});
  }else if(to.name == 'login') {
    if(localStorage.getItem("access_token") == null) {
      next();
    }else{
      next({name: 'dashboard'});
    }
  }else{
    authService.isAuthorized().then(authResponse => {
      //Auth error
      if(authResponse.error != null) {
        if(from.name !== "login") {
            showError("Your session has expired. Please login again.").then(() => {
            next({name: 'login'});
          });
        }
      }
      //Auth success
      else{
        if(authResponse.data != null && authResponse.data !== "") {
          var params = to.params;
          params["userId"] = authResponse.data;
          userService.getUserById(authResponse.data).then(userResponse => {
            if(userResponse.data != null && userResponse.data !== "") {
              if(userResponse.data.roleType === "SWIMMER") {
                if(swimmerBlacklistedRoutes.includes(to.name)) {
                  next({name: 'dashboard'});
                }else{
                  next();
                }
              }else if(userResponse.data.roleType === "COACH") {
                if(coachBlacklistedRoutes.includes(to.name)) {
                  next({name: 'dashboard'});
                }else{
                  next();
                }
              }else if(userResponse.data.roleType === "ADMIN") {
                if(adminBlacklistedRoutes.includes(to.name)) {
                  next({name: 'dashboard'});
                }else{
                  next();
                }
              }
            }
          })
        }else{
          next({name: 'login'});
        }
      }
    });
  }
});
 */
//BOOT THE VUE APP
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  App,
  router: router,
  vuetify,
  VCalendar,

  render: (h) => h(App),
}).$mount("#app");
