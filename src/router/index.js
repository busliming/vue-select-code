import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'login' },
    component: () => import("../views/login/index.vue"),
    children: [
      //  登录
      {
        path: "login",
        name: "login",
        component: () => import(/* webpackChunkName: "login" */ "../views/login/log/index.vue")
      },
      {
        path: "test",
        name: "test",
        component: () => import(/* webpackChunkName: "login" */ "../views/login/test/index.vue")
      },
      //  城市选择
      {
        path: "select",
        name: "select",
        component: () => import(/* webpackChunkName: "login" */ "../views/login/select/index.vue")
      },
      //  国际区号选择
      {
        path: "code",
        name: "code",
        component: () => import(/* webpackChunkName: "login" */ "../views/login/code/index.vue")
      },
    ]
  },
  {
    path: '/main',
    name: 'main',
    component: () => import("../layouts/Layout.vue"),
    children: [
      //  首页
      {
        path: "home",
        name: "home",
        component: () => import(/* webpackChunkName: "home" */ "../views/home/index.vue")
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
