const routes = [
  {
    path: "",
    component: () => import("layouts/Home.vue"),
    children: [
      {
        path: "",
        name: "cmsIndex",
        component: () => import("src/pages/index.vue")
      }, // 首页
      {
        path: "/listPage",
        name: "list",
        component: () => import("src/pages/ListPage.vue")
      }, // 列表页
      {
        path: "/listDetail",
        name: "detail",
        component: () => import("src/pages/ListDetail.vue")
      }, // 内容详情页
      {
        path: "/MenuDeatil",
        name: "menuDeatil",
        component: () => import("src/pages/MenuDeatil.vue")
      }, // 内容详情页

      {
        path: "/columnDetail",
        name: "columnDetail",
        component: () => import("src/pages/ColumnDetail.vue")
      }, // 栏目详情页
      {
        path: "/IntroduceList",
        name: "introduce",
        component: () => import("src/pages/IntroduceList.vue")
      }, // 产品中心列表
      {
        path: "/pluginList",
        name: "plugin",
        component: () => import("src/pages/PluginList.vue")
      }, // 插件中心列表
      {
        path: "/ClientsList",
        name: "customercase",
        component: () => import("src/pages/ClientsList.vue")
      }, // 客户案例
      {
        path: "/AboutFrame",
        name: "aboutFrame",
        component: () => import("src/pages/AboutFrame.vue")
      } // 关于框架详情
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
