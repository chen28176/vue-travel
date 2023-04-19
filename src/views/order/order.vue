<!--
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-02-23 22:10:10
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-03-06 22:27:02
 * @Description: 
-->
<template>
  <div class="order">
    <van-nav-bar title="订单列表" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
      v-for="index in 6">
      <template #tags>
        <van-tag plain type="primary">标签</van-tag>
        <van-tag plain type="primary">标签</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">-</van-button>
        <van-button size="mini">+</van-button>
      </template>
    </van-card>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持配送, <span @click="onClickLink">修改地址</span>
      </template>
    </van-submit-bar>

  </div>

  <van-submit-bar :price="0" button-text="提交订单" @submit="onSubmit" />
</template>

<script setup>
  import router from '@/router';

  const onClickLeft = () =>{
    router.go(-1)
  }
</script>

<style lang="less" scoped></style>
