import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router