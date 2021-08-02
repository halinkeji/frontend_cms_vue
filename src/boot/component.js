import Vue from "vue";

var _ = require("lodash");

import { date } from "quasar";
Vue.prototype.$q_date = date;

import hlPagination from "../components/hl-pagination.vue";
Vue.component("hl-pagination", hlPagination);

import hlEditor from "../components/hl-editor/index.vue";
Vue.component("hl-editor", hlEditor);
