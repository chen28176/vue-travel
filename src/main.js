/*
 * @Description: 
 * @Author: 86
 * @Date: 2023-02-23 22:10:10
 * @LastEditTime: 2023-05-06 00:00:09
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import 'vant/lib/index.css'// 这里
import './mock/user'
import "normalize.css"
import "./assets/css/index.css"
createApp(App).use(router).use(pinia).mount('#app')

