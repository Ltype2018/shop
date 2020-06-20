<template>
  <div class="shopping-cart">
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickLeft" />
    <template v-if="cartProducts.length">
      <div v-for="item in cartProducts" :key="item.title">
        <van-row>
          <van-col span="2">
            <van-checkbox v-model="item.checked"></van-checkbox>
          </van-col>
          <van-col span="22">
            <van-card :title="item.title" :price="item.price" :thumb="item.img" class="list-card">
              <template #footer>
                <van-button size="mini" @click="incrementItemQuantity(item)">+</van-button>
                <span>{{item.quantity}}</span>
                <van-button size="mini" @click="decrementItemQuantity(item)">-</van-button>
              </template>
            </van-card>
          </van-col>
        </van-row>
      </div>
      <van-submit-bar :price="100*cartTotalPrice" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="isAllChecked">全选</van-checkbox>
      </van-submit-bar>
    </template>
    <template v-else>
      <van-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        description="购物车空空如也"
      />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ShoppingCart",
  computed: {
    ...mapGetters("shopping_cart", ["cartProducts", "cartTotalPrice"]),
    isAllChecked: {
      get: function() {
        let length = this.cartProducts.filter(value => value.checked).length;
        return length === this.cartProducts.length ? true : false;
      },
      set: function(val) {
        this.$store.commit("shopping_cart/setChecked", val.checked);
      }
    }
  },
  methods: {
    ...mapMutations("shopping_cart", [
      "incrementItemQuantity",
      "decrementItemQuantity"
    ]),
    onClickLeft() {
      this.$router.push({ path: "/home/home-content" });
    }
  }
};
</script>

<style scoped>
.delete-button {
  height: 100%;
}
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
</style>