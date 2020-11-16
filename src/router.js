import Vue from "vue";
import Router from "vue-router";

import App from "./App";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";

Vue.use(Router);

const routes = [
  { path: "/", name:"inicio", component: App },
  { path: "/home", name:"home",component: Home },
  { path: "/login", name: 'login', component: Login },
  { path: "/register", name: 'register', component: Register }
];

const router = new Router({
  routes
});

export default router;