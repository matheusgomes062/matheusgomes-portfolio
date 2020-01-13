import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/whois",
    name: "whois",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
  // {
  //   path: "/contact",
  //   name: "contact",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Contact.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
