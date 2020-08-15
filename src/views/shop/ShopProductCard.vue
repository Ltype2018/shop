<template>
  <div class="shop-product-list">
    <van-grid :border="false" :column-num="2">
      <van-grid-item v-for="product in products" :key="product.title">
        <product-card :product="product">
          <van-cell :title="`${product.evaluation}条评价\xa0\xa0\xa0\xa0\xa0\xa0好评99%`" />
        </product-card>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import ProductCard from '@/components/product-list/ProductCard'
export default {
    name:"ShopProductList",
    components:{
       "product-card":ProductCard
    },
    props:{
        products:{
            type:Array,
            required:true
        }
    },

}
</script>

<style lang="scss" scoped>
.van-grid-item {
  padding: 3px;
  background-color: #f7f7f7;
}
.van-grid-item >>> .van-grid-item__content {
  padding: 0px;
}
</style>
