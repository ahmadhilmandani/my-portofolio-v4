import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";

import HomeView from "../views/HomeView.vue";
import MainLayout from "../layouts/MainLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: HomeView,
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
