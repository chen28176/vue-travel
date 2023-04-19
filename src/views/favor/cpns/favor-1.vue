<template>
    <div class="favor-houses">
        <div class="top">
            <img src="@/assets/img/favor/houses.webp" alt="">
        </div>
        <div class="end">
            <span>冬悦酒店（广东夏茅店）豪华浴缸 </span>
            <span class="money">￥196</span>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
    
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
  </style>