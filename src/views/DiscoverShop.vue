<template>
  <div class="discover_shop">
    <h3 style="margin-bottom:10px">每日好店</h3>
    <section class="shop_item_card" v-for="shop in shops" :key="shop.title">
      <van-cell :title="shop.title" :value="`关注人数: ${shop.follower}`" :icon="shop.log" />
      <div>
        <van-image :src="shop.url" />
      </div>
    </section>
  </div>
</template>

<script>
import { getDiscoverShop } from "@/api/groupApi";
export default {
  name: "DiscoverShop",
  data() {
    return {
      shops: []
    };
  },
  created() {
    getDiscoverShop().then(res => (this.shops = res.data));
  }
};
</script>

<style scoped>
.discover_shop {
  background-color: #f7f7f7;
  padding: 20px;
}
.shop_item_card {
  height: 250px;

  border-radius: 30px;
  overflow: hidden;
}
.van-cell__title {
  font-weight: bold;
}
.van-image {
  width: 100%;
  height: 100%;
}
</style>