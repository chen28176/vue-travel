<!--
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-02-23 22:10:10
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-03-07 15:03:14
 * @Description: 
-->
<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component" />
      </keep-alive>
    </router-view>
    <tab-bar v-show="!router.meta.hideTadBar" />
  </div>
  <Loading />
</template>

<script setup>

import TabBar from "@/components/tab-bar/tab-bar.vue"
import Loading from "@/components/loading/loading.vue"
  import { useRoute } from "vue-router";

  const router = useRoute()
</script>

<style scoped></style>