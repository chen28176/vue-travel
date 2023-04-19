<!--
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-02-23 22:10:10
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-03-06 17:42:15
 * @Description: 
-->
<template>
  <!-- 收藏 -->
  <div class="favor">
    <!-- 导航 -->
    <NavBar :title='title' left-text="首页" @click-left="onClickLeft"/>
    <van-tabs v-model:active="active">
      <van-tab title="房屋">
        <favor1  v-for="index in 6"/>
      </van-tab>
      <van-tab title="房东">
        <div class="favor-landlord">
          <p class="text">暂无收藏</p>
        <button class="button" @click="onClickLeft">随便去逛逛</button>
        </div>
      </van-tab>
    </van-tabs>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia'
import NavBar from '@/components/navbar/NavBar.vue';
import favor1 from './cpns/favor-1.vue';
import router from '@/router';
const title = '收藏'
// 点击返回首页
const onClickLeft = () => {
  router.push('/home')
}


</script>

<style scoped lang="less">
.landlord-content {
  .no-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .empty {
      width: 400px;
      height: 300px;
    }

    .btn {
      width: 160px;
      height: 40px;
      border: none;
      border-radius: 25px;
      background: #ff9645;
      color: #fff;
    }
  }
}

.favor{
  height: 100vh;
  overflow-x: hidden;
  margin-bottom: 50px;
  .favor-landlord{
    display: flex;
    flex-direction: column;
    align-items: center;
    .text{
    margin-top: 200px;
    font-size: 30px;
    color: #ff9645;
    text-align: center;
  }
  .button{
    height: 20px;
    width:140px;
    padding: 20px 10px;
    border-radius: 20px;
    border: 0px;
    color: #000;
    background-color: #ff9645;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  }
  .favor-houses{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .top{

      img{
        width: 340px;
        height: 200px;
        border-radius: 20px;


      }
    }
    .end{
      display: flex;
      margin-top: 20px;
      margin-right:80px;
      color: #ff9645;
      .money{
        color: red;
      }
    }
  }
}
</style>
