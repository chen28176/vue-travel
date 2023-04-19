/*
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-02-23 22:10:10
 * @LastEditors: 86 10976595+chenruiho@user.noreply.gitee.com
 * @LastEditTime: 2023-03-16 23:54:08
 * @Description: 
 */
import { getHomeHotSuggests,getHomeHotCategories,getHomeHouseList } from "@/services"
import { defineStore } from 'pinia'

const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        categories: [],
        houseList:[],
        currentPage:1,

    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await getHomeHotSuggests()
            this.hotSuggests = res.data             
        },
        async fetchCategoriesDate() {
            const res = await getHomeHotCategories()
            this.categories =  res.data 
        },
        async fetchHouseListData() {
            const res = await getHomeHouseList(this.currentPage++)
            this.houseList.push(...res.data)
        }
    }
})
export default useHomeStore