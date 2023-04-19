/*
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-02-23 22:10:10
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-03-07 17:13:41
 * @Description: 
 */
import { getCityAll } from '@/services'
import { defineStore } from 'pinia'

const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {},
    currentCity: { cityName: '广州' }
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})

export default useCityStore
