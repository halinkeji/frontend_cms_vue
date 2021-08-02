import Vue from "vue";
import Vuex from "vuex";

// cms start
import home from "./home/index.js";
import system from "./system/index.js";
// cms end

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

const Store = new Vuex.Store({
  modules: {
    home,
    system
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEBUGGING
});

export default function(/* { ssrContext } */) {
  return Store;
}
