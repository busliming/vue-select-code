import Vue from 'vue'
// import 'lib-flexible';
import 'amfe-flexible/index.js'
import Vant from 'vant'
import 'vant/lib/index.css';
import "./assets/css/scroll.less"
Vue.use(Vant);

import Directives from '../src/directives/index.js';
Vue.use(Directives)

import { Lazyload } from 'vant';
Vue.use(Lazyload);


import Bounce from 'vue-bounce'
Vue.use(Bounce)

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
