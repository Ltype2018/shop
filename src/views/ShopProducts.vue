<template>
  <div class="shop-products">
    <div class="product-tab">
      <van-tabbar v-model="active">
        <van-tabbar-item name="default">默认</van-tabbar-item>
        <van-tabbar-item name="sales">销量</van-tabbar-item>
        <van-tabbar-item name="price">价格</van-tabbar-item>
        <van-tabbar-item name="evaluation">评价</van-tabbar-item>
      </van-tabbar>
    </div>
    <div class="product-container">
      <ShopProductCard :products="filteredProducts"/>
    </div>
  </div>
</template>

<script>
import filters from '@/utils/filters'
import ShopProductCard from "./ShopProductCard";
import { getShopProduct } from "@/api/shopApi"; 
export default {
  name: "ShopProducts",
  components: {
    ShopProductCard,
  },
  data() {
    return {
      active: "default",
      shopProducts:[]
    };
  },
  computed:{
    filteredProducts(){
      return  filters[this.active](this.shopProducts)
    }
  },
  mounted(){
      getShopProduct().then(res =>{
          console.log(res.data.shop_products)
          this.shopProducts = res.data
      })      
  },
};
</script>

<style lang="scss" scoped>
.product-tab{
    position: relative;

    .van-tabbar--fixed{
        position: absolute;
    }
}
</style>