import { createWebHistory, createRouter } from "vue-router";
import MainHome from "./Pages/MainHome/MainHome.vue";
import AllDocuments from "./Pages/AllDocuments/AllDocuments1400px.vue"
import Item1 from "./Pages/AllDocuments/Items/Item1.vue"

const routes = [
  {
    path: "/",
    component: MainHome,
  },
  {
    path: "/AllDocuments",
    component: AllDocuments,
  },
  {
    path: "/Item1",
    component: Item1
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;