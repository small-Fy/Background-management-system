import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Comment from "../views/comment/Comment";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/homepage"
  },
  {
    path: "/home",
    component: Comment,
    children: [
      {
        path: "",
        name: "home",
        component: Home
      }
    ]
  },
  // 首页配为结构的子路由
  {
    path: "/homepage",
    component: Comment,
    children: [
      {
        path: "",
        name: "homepage",
        component: () => import("../views/homepage/Homepage")
      }
    ]
  },
  // 表格页配为结构的子路由
  {
    path: "/table",
    component: Comment,
    children: [
      {
        path: "",
        name: "table",
        component: () => import("../views/table/Table")
      }
    ]
  },
  // 标签页配为结构的子路由
  {
    path: "/label",
    component: Comment,
    children: [
      {
        path: "",
        name: "label",
        component: () => import("../views/label/Label")
      }
    ]
  },
  // 发表页配为结构的子路由
  {
    path: "/published",
    component: Comment,
    children: [
      {
        path: "",
        name: "published",
        component: () => import("../views/published/Published")
      }
    ]
  },
  // 上传页配为结构的子路由
  {
    path: "/upload",
    component: Comment,
    children: [
      {
        path: "",
        name: "upload",
        component: () => import("../views/upload/Upload")
      }
    ]
  },
  // 文章页配为结构的子路由
  {
    path: "/articles",
    component: Comment,
    children: [
      {
        path: "",
        name: "articles",
        component: () => import("../views/articles/Articles")
      }
    ]
  },
  // 统计页配为结构的子路由
  {
    path: "/statistical",
    component: Comment,
    children: [
      {
        path: "",
        name: "statistical",
        component: () => import("../views/statistical/Statistical")
      }
    ]
  },
  // 表格页配为结构的子路由
  {
    path: "/excel",
    component: Comment,
    children: [
      {
        path: "",
        name: "excel",
        component: () => import("../views/excel/Excel")
      }
    ]
  },
  // 退出页配为结构的子路由
  {
    path: "/quit",
    component: Comment,
    children: [
      {
        path: "",
        name: "quit",
        component: () => import("../views/quit/Quit")
      }
    ]
  },
  {
    path: "*",
    name: "error",
    component: () => import("../views/error/Error")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
