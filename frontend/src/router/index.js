import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/",
    name: "Articles",
    component: () => import("../views/containers/Articles.vue")
  },
  {
    path: "/article/:id",
    name: "Article",
    component: () => import("../views/containers/Article.vue")
  },
  {
    path: "/category/:id",
    name: "Category",
    component: () => import("../views/containers/Category.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
