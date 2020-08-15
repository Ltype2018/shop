<template>
  <div id="product-card">
    <van-image lazy-load :src="product.img" />
    <van-cell :title="product.title" />
    <p class="price">￥{{product.price | numFilter}}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
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