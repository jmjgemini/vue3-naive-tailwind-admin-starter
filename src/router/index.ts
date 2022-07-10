import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import MainLayout from "../layouts/main-layout.vue";
import NotFound from "../pages/system/not-found.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: MainLayout,
    redirect: "/demo/page1",
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
      },
      // 404 页面
      {
        path: "/:path(.*)*",
        component: NotFound
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
