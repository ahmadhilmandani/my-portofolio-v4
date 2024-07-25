import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";

import HomeView from "../views/HomeView.vue";
import MainLayout from "../layouts/MainLayout.vue";
import ExperienceView from "../views/ExperienceView.vue";
import PersonalProjView from "../views/PersonalProjView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: HomeView,
      },
      {
        path: "experience-achievment",
        name: "ExperienceAchievment",
        component: ExperienceView,
      },
      {
        path: "personal-projects",
        name: "PersonalProjects",
        component: PersonalProjView,
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
