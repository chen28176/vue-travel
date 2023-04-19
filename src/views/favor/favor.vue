<!--
 * @Description: 订单详情页
 * @Author: 86
 * @Date: 2023-02-04 21:47:40
 * @LastEditTime: 2023-04-19 19:43:32
 * @LastEditors: Please set LastEditors
 * @FilePath: \hy-trip\src\views\favor\favor.vue
-->
<template>
  <div class="favor">
    <!-- 导航栏 -->
    <van-nav-bar title="收藏" />
    <!-- 下方收藏产品 -->
    <template v-for="(item,index) in hotFavorList.items" :key="index">
        <FavorListItem :item-data="item" />
    </template>
  </div>
</template>

<script setup>
import FavorListItem from './cpns/favor-list-item.vue'
import useFavorStore from '@/stores/modules/favor';
import { storeToRefs } from 'pinia';

// 发送请求
const favorStore = useFavorStore()

// 获取收藏产品
favorStore.fetchHotFavorList()

//结构后用于渲染数据到页面
const { hotFavorList } = storeToRefs(favorStore)

</script>

<style lang="less" scoped>
</style>
