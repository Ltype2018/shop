<template>
  <!--购物车卡片组件-->
  <div class="shopping-cart-card">
    <van-row>
      <van-col>
        <input class="toggle" type="checkbox" :checked="item.checked" @change="toggleItem(item)" />
      </van-col>
      <van-col span="22">
        <van-card :title="item.title" :price="item.price" :thumb="item.img" class="list-card">
          <template #footer>
            <van-stepper
              v-model="quantity"
              @plus="incrementItemQuantity(item)"
              @minus="decrementItemQuantity(item)"
            />
          </template>
        </van-card>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ShoppingCartCard",
  props: {
    item: Object
  },
  data() {
    return {
      insideItem: this.item
    };
  },
  computed: {
    quantity: {
      get: function() {
        return this.insideItem.quantity;
      },
      set: function(quantity) {
        this.$store.commit("shopping_cart/changeQuantity", {
          item: this.insideItem,
          quantity: quantity
        });
      }
    }
  },

  mounted() {
    console.log(this.insideItem);
  },
  methods: {
    ...mapMutations("shopping_cart", [
      "incrementItemQuantity",
      "decrementItemQuantity",
      "toggleItem"
    ])
  }
};
</script>