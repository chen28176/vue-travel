<!--
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-02-23 22:10:10
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-03-06 17:02:49
 * @Description: 
-->
<template>
    <div class="categories">
        <template v-for="(itme,index) in categories" :key="itme.id">
            <div class="item">
                <img :src="itme.pictureUrl" alt="">
                <div class="text">{{ itme.title }}</div>
            </div>
        </template>
    </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

// 获取数据
const homeStore = useHomeStore()
// 进行解构
const { categories }  = storeToRefs(homeStore)
</script>

<style lang='less'>
.categories{
    display: flex;
    overflow-x: auto;
    height: 80px;
    justify-content: flex-start;
    padding: 0 10px;
    margin-top: 15px;
    // 隐藏滚动条
    &::-webkit-scrollbar{
        display: none;
    }
    .item{
        width: 60px;
        display: flex;
        text-align: center;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        img{
            width: 30px;
            height: 30px;
        }
        .text{
            font-size: 12px;
            margin-top: 8px ;
        }
    }
}
</style>