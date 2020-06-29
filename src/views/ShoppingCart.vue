<template>
  <div class="shopping-cart">
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!--商品卡片-->
    <template v-if="cartProducts.length">
      <div v-for="item in cartProducts" :key="item.title">
         <ShoppingCartCard :item ="item"  />
      </div>
      <!--商品提交栏-->
      <van-submit-bar :price="100*cartTotalPrice" button-text="提交订单" @submit="onSubmit">
        <input class="toggle-all" id="toggle-all" type="checkbox" :checked="allChecked"
        @change="toggleAll(!allChecked)">
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
import { mapGetters, mapMutations} from "vuex";
import ShoppingCartCard from '@/components/ShoppingCartCard'
export default {
  name: "ShoppingCart",
  components:{
    ShoppingCartCard
  },
  computed: {
    ...mapGetters("shopping_cart", ["cartProducts", "cartTotalPrice","allChecked"])
  },
  methods: {
    ...mapMutations('shopping_cart',['toggleAll']),
    onClickLeft() {
      this.$router.go(-1)
    },
    onSubmit(){
      this.$router.push({path:"/home/pay"})
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
.empty{
  height: 60px;
}
</style>