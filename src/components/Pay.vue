<template>
  <div class="pay">
    <van-nav-bar left-text="确认订单" left-arrow @click-left="onClickLeft" />
    <van-cell
      size="large"
      title="张三    13022228888"
      is-link
      url="/home/address"
      label="湖南省长沙市长沙县蓝山郡 10 楼 606 室"
    />
    <div class="order-area">
      <section class="order-list">
        <OrderCard />
      </section>
      <section class="order-favourable">
        <van-cell title="发票" value="普通/个人"></van-cell>
        <van-cell title="优惠券" value="无可用"></van-cell>
        <van-cell title="红包" value="无可用"></van-cell>
        <van-cell title="积分" value="无可用"></van-cell>
      </section>
      <section class="order-cost">
        <van-cell title="商品金额"></van-cell>
        <van-cell title="运费" value="+￥0.00"></van-cell>
      </section>
    </div>

    <van-row>
      <van-col span="6" offset="14">
        实付金额: <span style="color:red;font-size:25px">d</span>
      </van-col>
    </van-row>
    <van-button round type="info" size="large" style="margin-top:10px" block>微信支付</van-button>
    <div class="empty"></div>
  </div>
</template>

<script>
import OrderCard from './OrderCard'
export default {
  name: "Pay",
  components:{
      OrderCard
  },
  methods: {
    onClickLeft() {
      this.$router.push("/home/home-content");
    }
  }
};
</script>

<style scoped>
.pay .order-area{
  background-color: #bbbbbb4b;
}
.empty {
  height: 60px;
}
section {
  margin-top: 20px;
}
</style>