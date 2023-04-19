<!--
 * @Description: 订单详情
 * @Author: 86
 * @Date: 2023-02-04 21:47:40
 * @LastEditTime: 2023-04-19 19:41:34
 * @LastEditors: Please set LastEditors
 * @FilePath: \hy-trip\src\views\order\order.vue
-->
<template>
  <div class="order">
    <!-- 导航栏 -->
    <van-nav-bar title="订单" />
    <!-- 内容 -->
    <div class="content">
    <van-swipe-cell class="content-order" v-for="(item,index) in hotOrderList.orders" :key="index">
        <van-card :num="item.cityTerritoryType" :price="item.prepayAmount" :desc="item.hotelName" :title="item.unitName"
          :thumb="item.unitPicture">
          <template #tags>
            <van-tag plain type="primary">{{item.cityName}}</van-tag>
            <van-tag plain type="primary">{{item.orderStatusDesc}}</van-tag>
          </template>
        </van-card>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script setup>
import useOrderStore from '@/stores/modules/order';
import { storeToRefs } from 'pinia';

// 发送请求
const OrderStore = useOrderStore()
// 获取订单商品
OrderStore.fetchHotOrderList()
// 结构数据
const { hotOrderList } = storeToRefs(OrderStore)

</script>

<style lang="less" scoped>
.delete-button {
  height: 100%;
}

.content-order {
  margin-bottom: 10px;
}
</style>
