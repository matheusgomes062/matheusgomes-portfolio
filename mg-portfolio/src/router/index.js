import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Whois from "../views/Whois.vue";
import Projects from "../views/Projects.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/whois",
    name: "whois",
    component: Whois
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects
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
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  }
});

export default router;
