import { createWebHistory, createRouter } from "vue-router";
import MainHome from "./Pages/MainHome/MainHome.vue";
import AllDocuments from "./Pages/AllDocuments/AllDocuments1400px.vue"

const routes = [
  {
    path: "/",
    component: MainHome,
  },
  {
    path: "/AllDocuments",
    component: AllDocuments,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;