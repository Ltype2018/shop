<template>
  <!--商品详情-->
  <div class="product_cart">
    <section class="product_images">
      <van-swipe>
        <van-swipe-item v-for="(image,index) in product.img" :key="index">
          <van-image fit="contain" lazy-load :src="image.url"></van-image>
        </van-swipe-item>
      </van-swipe>
    </section>
    <section class="product_info">
      <van-cell :title="`￥${product.price}`"  style="color:red; font-size:20px"></van-cell>
      <van-row type="flex" justify="space-around">
        <van-col span="6">销量{{product.sales}}件</van-col>
        <van-col span="6">免运费</van-col>
        <van-col span="6">{{product.send_product_time}}h内发货</van-col>
      </van-row>
      <van-cell-group>
      <van-cell is-link title="商品规格"></van-cell>
      <van-cell is-link>
        <template #title>
          <van-tag type="danger">满75减10</van-tag>
        </template>
      </van-cell>
      <van-cell icon="location-o" :title="product.address"></van-cell>
      </van-cell-group>
    </section>
    <section class="product_evaluate">
     <van-cell title="商品评价" is-link value="20条好评"></van-cell>
    </section>
    <section class="product_shop"></section>
    <section class="product_tobuy">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </section>
    <!--f
    <section class="product_sku">
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />
    </section>
    -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProductDetail",
  data() {
    return {
      show: false
    };
  },
  computed: mapState({
    product: state => state.products.product_detail
  }),
  mounted() {
    this.$store.dispatch("products/getProductDetail");
  }
};
</script>