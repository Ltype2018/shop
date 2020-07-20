<template>
  <!--商品详情-->
  <div class="product_cart">
    <van-icon
      name="wap-home-o"
      size="30px"
      style="position:absolute; z-index:999; top:40px; left:30px"
      @click="goHome"
    />
    <section class="product_images">
      <van-swipe>
        <van-swipe-item v-for="(image,index) in product.img" :key="index">
          <van-image fit="contain" lazy-load :src="image.show_url"></van-image>
        </van-swipe-item>
      </van-swipe>
    </section>
    <section class="product_info">
      <van-cell :title="`￥${product.price}`" style="color:red; font-size:25px"></van-cell>
      <van-cell :title="product.title" size="large" :label="product.label"></van-cell>
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
                <div class="detail">大</div>
                <div class="postNotice">内容</div>
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
                <div class="postNotice">sdga</div>
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
          <ProductEvaluate/>
        </div>
    </section>
    <section class="product_own_shop">
      <div class="item_floor">
        <ShopBox/>
      </div>
    </section>
    <section class="product_tobuy">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon
          icon="cart-o"
          to="/home/shopping-cart"
          text="购物车"
          :badge="itemsLength"
        />
        <van-goods-action-button type="warning" text="加入购物车" @click="addProductToCart(product)" />
        <van-goods-action-button type="danger" text="立即购买" @click.native="changeSku" />
      </van-goods-action>
    </section>
    <section class="product_sku">
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :hide-stock="sku.hide_stock"
        @add-cart="addProductToCart(product)"
        @buy-clicked="onBuyClicked"
      />
    </section>
    <div class="empty"></div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import ProductEvaluate from './ProductEvaluate'
import ShopBox from '@/views/ShopBox'
export default {
  name: "ProductDetail",
  components:{
    ProductEvaluate,
    ShopBox
  },
  props: ["id"],
  data() {
    return {
      show: false,
      sku: {
        tree: [
          {
            k: "颜色",
            v: [
              {
                id: "30349",
                name: "红色",
                imgUrl: "http://dummyimage.com/200x200/d179f2",
                previewImgUrl: "http://dummyimage.com/200x200/d179f2"
              }
            ],
            k_s: "s2"
          }
        ],
        list: [
          {
            id: 2259,
            price: 2500,
            s2: "30349",
            s3: "0",
            stock_num: 110
          }
        ],
        price: "25",
        stock_num: 110,
        none_sku: false,
        hide_stock: false
      },
      goods: {
        picture: "http://dummyimage.com/200x200/d179f2"
      }
    };
  },
  computed: mapState({
    ...mapGetters("shopping_cart", ["productDetailInfo", "itemsLength"]),
    product() {
      return this.productDetailInfo(this.id);
    }
  }),
  methods: {
    ...mapActions("shopping_cart", ["addProductToCart"]),
    changeSku() {
      this.show = true;
    },
    onBuyClicked() {
      this.$router.push({ path: "/home/pay" });
    },
    goHome() {
      this.$router.push({ path: "/home/home-content" });
    }
  }
};
</script>

<style lang="scss" scoped>
.empty {
  height: 60px;
}
.product_cart {
  background-color: #f7f7f7;
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

    .right{
      flex-grow: 15;
      
      .postNotice {
        color: #999999;
      }
    }
  }
}
</style>