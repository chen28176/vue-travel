<!--
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-03-06 22:48:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-08 22:55:26
 * @Description: 
-->
<template>
    <div class="login">
        <van-form>
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
                <van-field v-model="loginForm.username" name="用户名" label="用户名" placeholder="admin"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="loginForm.password" type="password" name="密码" label="密码" placeholder="123456"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit" @click.prevent="handleSubmit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script setup>
import router from '@/router';
import axios from 'axios';
import { ref } from 'vue';
import { Toast  } from 'vant'// 按需导入
import 'vant/lib/index.css';

const loginForm = ref(
    {
      username: '',
      password: ''
    }
)

const handleSubmit= () =>  {
    axios.post('/api/login', loginForm.value)
        .then(response => {
            if (response.data.code === 200) {
                // 登录成功，保存token到本地存储
                localStorage.setItem('token', response.data.data.token)
                // 跳转到首页
                router.push('/home')
            } else {
                // 登录失败，显示错误提示
                Toast.fail(response.data.message)// 失败提示
            }
        })
        .catch(error => {
            console.log(error)
        })
}
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