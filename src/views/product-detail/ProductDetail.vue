<template>
  <!--商品详情-->
  <div class="product_cart">
    <NavBar/>
    <section class="product_images">
      <van-swipe>
        <van-swipe-item v-for="(image,index) in product.img" :key="index">
          <van-image fit="contain" lazy-load :src="image.show_url"></van-image>
        </van-swipe-item>
      </van-swipe>
    </section>
    <section class="product_info">
      <van-cell :title="product.price | numFilter" style="color:red; font-size:25px"  class="price-box"/>
      <van-cell :value="product.title" style="font-weight:bold; font-size:18px" />
      <van-cell :value="product.label" style="padding-top:0px" />
    </section>
    <section class="product_user">
      <div class="item_floor">
        <van-cell size="large">
          <template #title>
            <span class="item_title">优惠</span>
            <van-tag type="danger">满75减10</van-tag>
          </template>
        </van-cell>
      </div>
      <div class="item_floor">
        <van-cell is-link>
          <template #title>
            <div class="item_floor_container">
              <div class="left">
                <span class="item_title">已选</span>
              </div>
              <div class="right">
                <div class="detail">{{product.title.slice(0, 8)}}</div>
              </div>
            </div>
          </template>
        </van-cell>
        <van-cell is-link>
          <template #title>
            <div class="item_floor_container">
              <div class="left">
                <span class="item_title">送至</span>
              </div>
              <div class="right">
                <div class="detail">sadg</div>
                <div class="postNotice">现货</div>
              </div>
            </div>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="item_floor_container">
              <div class="left">
                <span class="item_title">运费</span>
              </div>
              <div class="right">
                <div>货到付款运费20元,在线支付免运费</div>
              </div>
            </div>
          </template>
        </van-cell>
      </div>
    </section>
    <section class="product_evaluate">
      <div class="item_floor">
        <ProductEvaluate />
      </div>
    </section>
    <section class="product_own_shop">
      <div class="item_floor">

      </div>
    </section>
    <section class="product_detail_info">
      <div class="item_floor">
        <ProductDetailInfo />
      </div>
    </section>
    <section class="product_tobuy">
      <!--下方购物确认模块-->
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" :badge="itemsLength" to="/home/shopping-cart" />
        <van-goods-action-button type="warning" text="加入购物车" @click="changeSku"  />
        <van-goods-action-button type="danger" text="立即购买"  />
      </van-goods-action>
    </section>
    <section>
      <!--商品sku-->
      <van-action-sheet v-model="show">
        <div class="sku_card">
          <van-card  :price="product.price | numFilter" :title="product.title.slice(0,8)"  :thumb="product.previewImg"  lazy-load />
          <div class="num_box">
            <div>数量</div>
            <van-stepper  v-model.number="numbers" />
          </div>
          <div class="confirm_button">
            <van-button type="danger"  round size="large" @click="confirmNum">确认</van-button>
          </div>
        </div>
      </van-action-sheet>
    </section>
    <div class="empty"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ProductEvaluate from "./ProductEvaluate";
import ProductDetailInfo from "./ProductDetailInfo";

export default {
  name: "ProductDetail",
  components: {
    ProductEvaluate,
    ProductDetailInfo,
  },
  props: ["id"],
  data() {
    return {
      show: false,
      numbers:1
    };
  },
  computed:{
       ...mapGetters("shopping_cart", ["productDetailInfo", "itemsLength"]),
    product() {
      console.log("加载商品信息")
      return this.productDetailInfo(this.id);
    },
  }
 
  ,
  methods: {
    ...mapActions("shopping_cart", ["addProductToCart"]),
     confirmNum(){
       this.addProductToCart({product:this.product, numbers:this.numbers})
     },
    changeSku() {
      this.show = true;
    },
    onBuyClicked() {
      this.$router.push({ path: "/home/pay" });
    },
    goHome() {
      this.$router.push({ path: "/home/home-content" });
    },
  },
};
</script>

<style lang="scss" scoped>
.empty {
  height: 60px;
}
.product_cart {
  background-color: #f7f7f7;
}
.product_images .van-swipe {
  transform: translateZ(0);
}
.item_floor {
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 5px;

  .item_floor_container {
    display: flex;
    align-items: baseline;

    .left {
      flex-grow: 1;
      font-weight: bold;
    }

    .right {
      flex-grow: 15;

      .postNotice {
        color: #999999;
      }
    }
  }
}

.van-card__price{
  color: red;

  .van-card__price-integer{
    font-size: 25px;
  }
}
.product_info {
  /deep/ .van-cell::after {
    display: none !important;
  }
}
.price-box{
  span::before{
    content: "￥";
    font-size: 15px;
  }
}

.num_box{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 15px;
}

.sku_card{
  padding: 20px 10px  200px 10px;
}

.confirm_button{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>