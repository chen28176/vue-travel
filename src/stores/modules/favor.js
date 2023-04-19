/*
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-02-26 22:28:38
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-02-26 22:43:01
 * @Description: 
 */
import { defineStore } from 'pinia'
import { getFavor } from '@/services'



export const useFavorStore = defineStore('favor', {
  actions: {
    async getFavorData() {
      const res = await getFavor()
      this.favorList = res.data.data.items
    }
  },
  getters: {}
})
