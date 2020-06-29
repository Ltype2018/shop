<template>
  <div class="home-content">
    <header>
      <!--头部横幅-->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image lazy-load :src="image" />
        </van-swipe-item>
      </van-swipe>
    </header>
    <section class="nav-img">
      <!-- 中间的图片小图标 -->
      <van-grid :border="false" :column-num="4" square>
        <van-grid-item v-for="(navImg, index) in navImages" :key="index">
          <van-image :src="navImg" />
        </van-grid-item>
      </van-grid>
    </section>
    <section class="time-to-shopping">
        <van-image :src="toShoping" />
    </section>
    <!--中间的滚动图-->
    <section class="mid-img">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(midImg, index) in midImgs" :key="index">
          <van-image lazy-load :src="midImg" />
        </van-swipe-item>
      </van-swipe>
    </section>
    <!--商品列表-->
    <keep-alive><productsCard :productsList="productsList"/></keep-alive>
    
  </div>
</template>

<script>
import ProductsCard from '@/components/ProductsCard'
import {mapState} from 'vuex'
export default {
  name: "HomeContent",
  components:{
    ProductsCard
  },
  data() {
    return {
      images: [
        require("@/assets/header-A.png"),
        require("@/assets/header-B.png"),
        require("@/assets/header-C.png"),
        require("@/assets/header-D.png"),
        require("@/assets/header-E.png")
      ],
      navImages: [
        require("@/assets/nav-A.png"),
        require("@/assets/nav-B.png"),
        require("@/assets/nav-C.png"),
        require("@/assets/nav-D.png"),
        require("@/assets/nav-E.png"),
        require("@/assets/nav-F.png"),
        require("@/assets/nav-G.png"),
        require("@/assets/nav-H.png")
      ],
      toShoping:require('@/assets/to-shopping.png'),
      midImgs:[
        require("@/assets/mid-A.jpg"),
        require("@/assets/mid-B.jpg")
      ]
    };
  },
  computed:{
    ...mapState({
      productsList:state => state.products.productsList 
    })
  },
  mounted(){
    this.$store.dispatch('products/getProducts')
  }

};
</script>

<style scoped>
.van-cell{
  padding:0
}
.home-content .van-swipe{
  transform: translateZ(0);
}
</style>