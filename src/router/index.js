/*
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-02-23 22:10:10
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-03-07 16:20:38
 * @Description: 
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  // *映射关系: path -> component
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      component: () => import("@/views/login/login.vue"),
      meta: {
        hideTadBar: true
      }
    },
    {
      path: "/home",
      component: () => import("@/views/home/home.vue")
    },
    {
      path: "/favor",
      component: () => import("@/views/favor/favor.vue")
    },
    {
      path: "/order",
      component: () => import("@/views/order/order.vue")
    },
    {
      path: "/message",
      component: () => import("@/views/message/message.vue")
    },
    {
      path: "/city",
      component: () => import("@/views/city/city.vue"),
      // ! 隐藏底层导航栏
      meta: {
        hideTadBar: true
      }
    },
    {
      path: "/search",
      component: () => import("@/views/search/search.vue"),
      meta: {
        hideTadBar: true
      }
    },
    {
      path: "/detail/:id",
      component: () => import("@/views/detail/detail.vue"),
    },
  ]
})

export default router
