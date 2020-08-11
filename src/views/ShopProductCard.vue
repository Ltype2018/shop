<template>
  <div class="product-card">
    <van-grid :border="false" :column-num="2">
      <van-grid-item v-for="product in products" :key="product.title">
        <van-image lazy-load :src="product.img"></van-image>
        <van-cell :title="product.title" />
        <p style="color:red; font-size:18px">￥{{product.price | numFilter}}</p>
        <van-cell :title="`${product.evaluation}条评价\xa0\xa0\xa0\xa0\xa0\xa0好评99%`"  style="color:gray"/>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "ShopProductCard",
  props: {
    products: Array,
  },
};
</script>


<style lang="scss" scoped>
.van-grid-item {
  padding: 3px;
  background-color: #f7f7f7;
}
.van-grid-item >>> .van-grid-item__content {
  padding: 0px;
}
p{
    position: relative;
    right: 60px;

}

.van-cell {
  padding: 0px;

  .van-cell__title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}

  .van-cell::after {
    display: none !important;
  }
</style>