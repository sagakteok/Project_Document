import { createWebHistory, createRouter } from "vue-router";
import MainHome from "./Pages/MainHome/MainHome.vue";
import AllDocuments from "./Pages/AllDocuments/AllDocuments.vue"
import AllDocumentsItem1 from "./Pages/AllDocuments/Items/Item1.vue"

const routes = [
  {
    path: "/",
    component: MainHome,
  },
  {
    path: "/AllDocuments",
    meta: { title: '서류 모아보기'},
    children: [
      {
        path: "",
        component: AllDocuments,
      },
      {
        path: "item1",
        component: AllDocumentsItem1,
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;