<template>
  <div class="home-content">
    <header>
      <!--头部横幅-->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
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
        <img :src="toShoping">
    </section>
    <!--中间的滚动图-->
    <section class="mid-img">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(midImg, index) in midImgs" :key="index">
          <img v-lazy="midImg">
        </van-swipe-item>
      </van-swipe>
    </section>
    <!--商品列表-->
    <GoodsCard/>
  </div>
</template>

<script>
import GoodsCard from '@/components/GoodsCard'
export default {
  name: "HomeContent",
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
  components:{
    GoodsCard
  }
};
</script>

