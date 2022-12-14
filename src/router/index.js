import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/Login.vue"),
  },

  {
    path: "/phone-number",
    name: "my-phone",
    component: () =>
      import(
        /* webpackChunkName: "my-phone" */ "../views/phone-number/code-qr.vue"
      ),
  },

  {
    path: "/profile",
    name: "user-profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "user-profile" */ "../views/use-profile/UserProfile.vue"
      ),
  },

  {
    path: "/home",
    name: "home-page",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "home-page" */ "../views/home-page/home.vue"),
  },

  {
    path: "/explore",
    name: "dash-boad-explore",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "dash-boad-explore" */ "../views/explore/dashboad.vue"
      ),
  },

  {
    path: "/view-profile",
    name: "view-profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "view-profile" */ "../views/use-profile/view-profile.vue"
      ),
  },

  {
    path: "/test-tinder",
    name: "test-tinder",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "test-tinder" */ "../views/messages/index.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
