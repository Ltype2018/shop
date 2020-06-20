<template>
  <div class="products-card">
    <van-grid :border="false" :column-num="2">
      <van-grid-item  v-for="product in productsList" :key="product.title">
        <router-link :to="{path:`/product/detail/${product.id}`}">
          <van-image lazy-load :src="product.pre_img"></van-image>
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
  methods:mapActions("shopping_cart", ["addProductToCart"])
};
</script>

<style scoped>
.van-grid-item{
  padding: 3px;
  background-color: rgb(211, 208, 208);
}
.van-grid-item >>> .van-grid-item__content {
    padding: 0px;
}
.van-cell {
  padding: 0px;
}
.empty{
  height: 60px;
}
</style>