<!--
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-03-06 22:48:52
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-03-06 23:10:28
 * @Description: 
-->
<template>
    <div class="login">
        <van-form @submit="onSubmit">
            <h1>请登录</h1>
            <van-notice-bar left-icon="volume-o" :scrollable="false">
                <van-swipe vertical class="notice-swipe" :autoplay="3000" :touchable="false" :show-indicators="false">
                    <van-swipe-item>明月直入，无心可猜。</van-swipe-item>
                    <van-swipe-item>仙人抚我顶，结发受长生。</van-swipe-item>
                    <van-swipe-item>今人不见古时月，今月曾经照古人。</van-swipe-item>
                </van-swipe>
            </van-notice-bar>
            <van-divider />
            <van-cell-group inset>
                <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit" >
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script setup>
import router from '@/router';
import { ref } from 'vue';

const username = ref('123');
const password = ref('123123');
const onSubmit = (values) => {
    router.push('/home')
};


</script>

<style lang="less" scoped>
.notice-swipe {
    height: 40px;
    line-height: 40px;
}

.login {
    h1 {
        text-align: center;
        color: var(--primary-color);
        margin: 50px 20px;
    }
}
</style>