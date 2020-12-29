/*
 * @Desc: 
 * @Date: 2019-12-25 15:49:45
 * @LastEditors: Nice
 * @LastEditTime: 2020-09-05 15:46:02
 */
import Vue from "vue";
import Vuex from "vuex";

// style
import windowResize from "@/store/common/windowResize.js";


Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      windowResize,
    },
    strict: process.env.DEV
  });
  return Store;
}
