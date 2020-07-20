<template>
  <div class="shop-box-tab" v-if="shop.followers">
    <div class="left">
      <div class="numbers">{{shop.followers}}</div>
      <div >粉丝人数</div>
    </div>
    <div class="middle">
      <div class="numbers">{{shop.totalProducts}}</div>
      <div>全部商品</div>
    </div>
    <div class="right">
      <div>
        <span>评价 {{shop.score.evaluation}}</span>
      </div>
      <div>
        <span>物流 {{shop.score.transport}}</span>
      </div>
      <div>
        <span>售后 {{shop.score.service}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopBoxTab",
  props: {
    shop: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.shop-box-tab {
    display: flex;
    margin-top: 20px;
    font-size: 10px;


    .left {
        flex-grow: 3;
        text-align: center;

    }

    .middle{
        flex-grow: 4;
        text-align: center;

    }
    .numbers {
        font-size: 16px;
    }
    
}
</style>