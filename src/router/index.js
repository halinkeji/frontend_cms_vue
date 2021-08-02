import Vue from "vue";
import VueRouter from "vue-router";
import { Cookies, LocalStorage, LoadingBar, Dialog } from "quasar";
import {
  isAuthenticated,
  isCookiesTokenExpir,
  isLocalStorageTokenExpir,
  removeAllCookies,
  removeAllLocalStorage,
  setAllLocalStorage
} from "@/utils/common";
import routes from "./routes";
import store from "../store/index";
Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function(/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  Router.beforeEach((to, from, next) => {
    LoadingBar.start();
    let authConfig = LocalStorage.getItem("authConfig");

    if (!authConfig) {
      // if (!authConfig.appId) {
      getLoginUrl();
      // }
    }

    if (to.meta.auth) {
      var oauth_url =
        authConfig.login_uri +
        "?response_type=code&appId=" +
        authConfig.appId +
        "&redirect_uri=" +
        authConfig.redirect_uri;
      //验证sso是否登录
      if (Cookies.get("loggedIn")) {
        //判断是否即将过期
        if (isCookiesTokenExpir()) {
          removeAllLocalStorage();
          removeAllCookies();
          window.location.href = oauth_url;
          return false;
        }

        //验证本地用户是否已经登录
        if (isAuthenticated()) {
          //判断accessToken即将到期后刷新token
          if (isLocalStorageTokenExpir()) {
            removeAllLocalStorage();
            removeAllCookies();
            window.location.href = oauth_url;
            return false;
          }

          // //页面中转
          // if (to.name === 'index' || to.path === '/index' || to.path === '/') {
          //     router.push(router.currentRoute.query.to || '/')
          //     return false;
          // }
          //无效页面跳转至首页
          // if (!to.name) {
          //   next({ path: '/error404' })
          //   return false;
          // }
          setAllLocalStorage();
          return next();
        }

        //无效页面跳转至首页
        if (!to.name) {
          next({ path: "/error404" });
          return false;
        }

        return next();
      }

      removeAllLocalStorage();
      removeAllCookies();
      window.location.href = oauth_url;
    } else {
      //无效页面跳转至首页
      if (!to.name) {
        next({ path: "/error404" });
        return false;
      }

      if (Cookies.get("loggedIn")) {
        setAllLocalStorage();
      }
      // 不需要身份校验 直接通过
      return next();
    }
    LoadingBar.stop();
  });

  Router.afterEach(() => {
    LoadingBar.stop();
  });

  return Router;
}

function getLoginUrl() {
  const Store = store();
  Store.dispatch("system/getConfig")
    .then(res => {
      if (parseInt(res.code) == 200) {
        LocalStorage.set("authConfig", res.data);
      }
    })
    .catch(error => {});
}
