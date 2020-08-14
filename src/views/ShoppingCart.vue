<template>
  <div class="shopping-cart">
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!--商品卡片-->
    <template v-if="cartProducts.length">
      <div v-for="item in cartProducts" :key="item.title">
        <ShoppingCartCard :item="item" />
      </div>
      <!--商品提交栏-->
      <van-submit-bar :price="100*cartTotalPrice" :button-text="`去结算(${toggleProductLength}件)`" @submit="onSubmit">
        <div class="radio-container">
          <span class="radio-checkbox-img" :class="{active:allChecked}" @click="toggleAll(!allChecked)"></span>
          <span>全选</span>
        </div>
      </van-submit-bar>
    </template>
    <!--购物车为空时显示-->
    <template v-else>
      <van-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        description="购物车空空如也"
      />
    </template>
    <div class="empty"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ShoppingCartCard from "@/components/ShoppingCartCard";
export default {
  name: "ShoppingCart",
  components: {
    ShoppingCartCard,
  },
  computed: {
    ...mapGetters("shopping_cart", [
      "cartProducts",
      "cartTotalPrice",
      "allChecked",
      "toggleProductLength"
    ]),
  },
  methods: {
    ...mapMutations("shopping_cart", ["toggleAll"]),
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit() {
      this.$router.push({ path: "/home/pay" });
    },
  },
};
</script>

<style scoped>
.shopping-cart{
  background-color: #f7f7f7;
}
.delete-button {
  height: 100%;
}
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
.radio-checkbox-img {
  background: url("../assets/checkimg.png") no-repeat;
  display: inline-block;
  width: 30px;
  height: 30px;
}
.radio-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.active{
  background-position:-2px -33px !important ;
}
.van-submit-bar__button {
  width: 130px;
}
.empty {
  height: 60px;
}
</style>