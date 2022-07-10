import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import MainLayout from "../layouts/main-layout.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: MainLayout,
    meta: {
      title: "root"
    },
    children: [
      {
        path: "demo/page1",
        component: () => import("../pages/demo/page-one.vue"),
        meta: {
          title: "demo1"
        }
      },
      {
        path: "demo/page2",
        component: () => import("../pages/demo/page-two.vue"),
        meta: {
          title: "demo2"
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
