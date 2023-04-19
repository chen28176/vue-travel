<!--
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-02-23 22:10:10
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-03-06 22:47:24
 * @Description: 
-->
<template>
  <div class="message">
    <van-nav-bar title="消息中心" left-text="首页" right-text="分享" left-arrow  @click-left="onclick"  @click-right="showShare = true">
    </van-nav-bar>
    <div class="content">
      <img src="@/assets/img/message/icon_message.png" alt="" srcset="">
      <p>暂无更多消息</p>
    </div>
    <van-share-sheet v-model:show="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '@/router';
const onclick = () => {
  router.push('/home')
}

const showShare = ref(false);
const options = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link' },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' },
];

const onSelect = (option) => {
  showToast(option.name);
  showShare.value = false;
};

</script>

<style lang="less" scoped>
.message {
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;

    img {
      width: 88%;
    }
  }
}
</style>
