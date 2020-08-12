<template>
  <!--购物车卡片组件-->
  <div class="shopping-cart-card">
    <div class="radio-container">
      <span class="radio-checkbox-img" :class="{active:item.checked}" @click="toggleItem(item)"></span>
    </div>
    <div class="product-cart-info">
      <van-card
        :title="item.title"
        :price="item.price | numFilter"
        :thumb="item.img"
      >
        <template #footer>
          <van-stepper
            v-model="quantity"
            @plus="incrementItemQuantity(item)"
            @minus="decrementItemQuantity(item)"
          />
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ShoppingCartCard",
  props: {
    item: Object,
  },
  data() {
    return {
      insideItem: this.item,
    };
  },
  computed: {
    quantity: {
      get: function () {
        return this.insideItem.quantity;
      },
      set: function (quantity) {
        this.$store.commit("shopping_cart/changeQuantity", {
          item: this.insideItem,
          quantity: quantity,
        });
      },
    },
  },

  mounted() {
    console.log(this.insideItem);
  },
  methods: {
    ...mapMutations("shopping_cart", [
      "incrementItemQuantity",
      "decrementItemQuantity",
      "toggleItem",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.shopping-cart-card{
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  .radio-container{
    display: flex;
    flex-grow: 1;
    justify-content: center;
  }

  .product-cart-info{
    flex-grow: 5;
  }
}
.radio-checkbox-img {
  background: url("../assets/checkimg.png") no-repeat;
  display: inline-block;
  width: 30px;
  height: 30px;
}

.active{
  background-position:-2px -33px !important ;
}
</style>