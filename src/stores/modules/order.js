/*
 * @Description: 订单
 * @Author: 86
 * @Date: 2023-02-04 21:47:40
 * @LastEditTime: 2023-04-19 19:41:42
 * @LastEditors: Please set LastEditors
 * @FilePath: \hy-trip\src\stores\modules\order.js
 */
import { defineStore } from 'pinia';
import { getOrderList } from '@/services';

const OrderStoreOptions = {
    state: () => ({
        hotOrderList: [],//存储收藏数据
    }),
    actions: {
        async fetchHotOrderList() {
            const res = await getOrderList()
            this.hotOrderList = res.data.data
        },
    }
}

const useOrderStore = defineStore('Order', OrderStoreOptions)

export default useOrderStore