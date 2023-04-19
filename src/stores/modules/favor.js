/*
 * @Description: 收藏页数据处理
 * @Author: 86
 * @Date: 2023-04-17 18:12:41
 * @LastEditTime: 2023-04-17 21:08:58
 * @LastEditors: 86 10976595+chenruiho@user.noreply.gitee.com
 * @FilePath: \hy-trip\src\stores\modules\favor.js
 */

import { defineStore } from 'pinia';
import { getFavorList } from '@/services';

const favorStoreOptions = {
    state: () => ({
        hotFavorList: [],//存储收藏数据
    }),
    actions: {
        async fetchHotFavorList() {
            const res = await getFavorList()
            this.hotFavorList = res.data.data
        },
    }
}

const useFavorStore = defineStore('favor', favorStoreOptions)

export default useFavorStore