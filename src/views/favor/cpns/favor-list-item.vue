<template>
      <div class="favor-list-item">
        <!-- 上方图片 -->
        <div class="top-img">
          <img :src="itemData.defaultPicture">
          <div class="info">
            <span>{{itemData.commentBrief.overall}}分 / {{itemData.commentBrief.scoreTitle}}</span>
          </div>
        </div>
        <!-- 下方信息 -->
        <div class="bottom-info">
          <div class="title">
            <div class="info">
              <span>{{itemData.unitInfor}}</span>
              <span>{{itemData.unitSummeries[0]?.text }}-{{itemData.unitSummeries[1]?.text }}</span>
            </div>
            <div class="title-h2">
              {{itemData.unitName}}
            </div>
          </div>
          <div class="price-info">
            <div class="info-hint">
              <span  v-for="(iten,indey) in itemData.houseTags" :key="indey">{{iten.text}}</span>
            </div>
            <div class="info-price">
              <span>￥{{ itemData.finalPrice }}</span>
              <span>￥{{itemData.productPrice}}</span>
              <div class="notice" v-if="itemData.priceTipBadge?.text">
                  {{ itemData.priceTipBadge?.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
defineProps({
  itemData: {
        type: Object,
    }
})
</script>

<style lang="less" scoped>
.favor-list-item {
  border-radius: 10px;
  padding: 10px;
  border-bottom: 1px solid #d6d6d8;
  margin: 10px;
  .top-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 363px;
      height: 20vh;
      border-radius: 2vh;
    }
    .info {
      width: 80px;
      margin-left: 10px;
      font-size: 10px;
      text-align: center;
      padding: 5px;
      position: relative;
      bottom: 170px;
      right: 130px;
      border-radius: 10px;
      color: #000;
      font-weight: bold;
      background: #e8e8e8;
    }
  }

  .bottom-info {
    .title {
      margin-top: 10px 10px;

      .info {
        margin: 5px 10px;
        span:nth-child(1) {
          font-size: 6px;
          color: #fff;
          background: #3f4954;
          padding: 0px 12px 2px 12px;
          margin-right: 20px;
          border-radius: 2px;
        }

        span:nth-child(2) {
          opacity: 0.6;
          font-size: 5px;
        }
      }

      .title-h2 {
        font-weight: bold;
        margin-left: 10px;
        font-size: 6px;
        margin-bottom: 10px;
      }


    }
    .price-info {
      margin-left: 10px;
        .info-hint {
          span {
            border-radius: 2px;
            color: #fc756d;
            padding: 0px 2px;
            background: #f9e9eb;
            margin-right: 6px;
          }
        }
        .info-price{
          margin-top: 10px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          span:nth-child(1){
            font-size: 20px;
            font-weight: bold;
            color: #fe9b4e;
            margin-right: 10px;
          }
          span:nth-child(2){
            font-size: 16px;
            color: #6a5a5a;
            text-decoration:line-through;
            margin-left: 10px;
          }
          .notice{
            color: #fff;
            margin-left: 10px;
            font-size: 6px;
            display: flex;
            padding: 2px 6px;
            align-items:center;
            background: red;
            border-radius: 10px;
          }
        }
      }
  }
}
</style>