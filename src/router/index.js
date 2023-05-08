/*
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-02-23 22:10:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-08 22:50:07
 * @Description: 路由页
 */
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  // *映射关系: path -> component
  routes: [
    {
      path: "/",
      redirect: "/home"
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
      component: () => import("@/views/home/home.vue"),
      meta: { requireAuth: true } // 添加元信息，表示需要登录才能访问
    },
    {
      path: "/favor",
      component: () => import("@/views/favor/favor.vue"),
      meta: { requireAuth: true } 
    },
    {
      path: "/order",
      component: () => import("@/views/order/order.vue"),
      meta: { requireAuth: true } 
    },
    {
      path: "/message",
      component: () => import("@/views/message/message.vue"),
      meta: { requireAuth: true } 
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

// 路由前置守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') // 假设使用localStorage保存登录状态
  if (to.matched.some(record => record.meta.requireAuth) && !isAuthenticated) { // 检查当前路由是否需要登录
    next('/login')
  } else {
    next()
  }
})
// // 路由后置守卫
// router.afterEach((to) => {

// })

export default router
