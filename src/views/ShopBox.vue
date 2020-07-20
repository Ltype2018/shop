<template>
  <div class="shop-box">
    <div class="shop-info">
      <div class="right">
        <van-image width="40" height="40" :src="shop.avatar" />
      </div>
      <div class="left">
        <div class="shop-info-name">{{shop.name}}</div>
        <div class="shop-info-level">
          <span style="font-size:12px">店铺等级</span>
          <van-rate allow-half void-icon="star" v-model="rates" size="12" color="red" readonly />
        </div>
      </div>
    </div>
    <div class="shop-box-container">
      <ShopBoxTab :shop="shop" />
    </div>
    <div class="shop-box-btn">
      <van-row type="flex" justify="center" gutter="20">
        <van-col span="8">
          <div class="btn-container">
            <van-icon name="star-o" />
            <span>关注店铺</span>
          </div>
        </van-col>
        <van-col span="8">
          <div class="btn-container">
            <van-icon name="shop-o" />
            <span>进入店铺</span>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import ShopBoxTab from "./ShopBoxTab";
import { getShopData } from "@/api/shopApi";
export default {
  name: "ShopBox",
  components: {
    ShopBoxTab
  },
  data() {
    return {
      rates: 4.5,
      shop: {}
    };
  },
  mounted() {
    getShopData().then(res => (this.shop = res.data.shop));
  }
};
</script>


<style lang="scss" scoped>
.shop-box {
  padding: 18px;
  font-size: 14px;
}
.shop-info {
  display: flex;

  .left {
    margin-left: 10px;
  }
}
.shop-box-btn {
    margin-top: 10px;
}
.btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    border:1px solid #e2e2e2;
    border-radius: 15px;
}
</style>