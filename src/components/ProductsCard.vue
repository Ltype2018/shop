<template>
  <div class="products-card">
    <van-grid :border="false" :column-num="2">
      <van-grid-item v-for="product in productsList" :key="product.title">
        <router-link :to="{path:`/product/detail/${product.id}`}">
          <van-image :src="product.showImg" width="100%">
          </van-image>
          <van-cell :title="product.title" />
        </router-link>
        <van-cell :title="`￥ ${product.price}`" style="color:red;font-size:18px"></van-cell>
      </van-grid-item>
    </van-grid>
    <div class="empty"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProductsCard",
  props: ["productsList"],
  data() {
    return {
      loadingImg: require("@/assets/tempImg.png"),
    };
  },
  methods: mapActions("shopping_cart", ["addProductToCart"]),
};
</script>

<style lang="scss" scoped>
.van-grid-item {
  padding: 3px;
  background-color: #f7f7f7;
}
.van-grid-item {
  /deep/ .van-grid-item__content {
    padding: 0px;
  }
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

.empty {
  height: 60px;
}
</style>