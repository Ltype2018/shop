<template>
<!--商品底部参数模块-->
  <div class="product-detail-info">
    <header>
      <van-tabs v-model="activeName">
        <van-tab title="商品介绍" name="introduce"> 
          <van-image lazy-load  v-for="item in imgs" :key="item.url" :src="item.url" />
        </van-tab>
        <van-tab title="规格参数" name="options">
          <div class="options-detail">
            <van-divider>商品参数</van-divider>
            <div class="option-detail-table">
                <p>商品编号： 355352</p>
                <p>净含量： 1.4kg</p>
                <p>贮存条件冷冻： (-18℃-0℃)</p>
                <p>保质期： 270天</p>
              <div class="empty"></div>
            </div>
          </div>
        </van-tab>
        <van-tab title="售后服务" name="service">
          <div>
            <van-divider>权利声明</van-divider>
            <div class="service-detail">
              <p>商城上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是商城重要的经营资源，未经许可，禁止非法转载使用</p>
              <p>本站商品信息均来自于厂商，其真实性、准确性和合法性由信息拥有者（厂商）负责。本站不提供任何保证，并不承担任何法律责任。</p>
            </div>
            <div class="empty"></div>
          </div>
        </van-tab>
      </van-tabs>
    </header>
  </div>
</template>

<script>
export default {
  name: "ProductDetailInfo",
  data(){
      return {
          activeName:"introduce",
          imgs:[
              {url:require('@/assets/p1.webp')},
              {url:require('@/assets/p2.webp')},
              {url:require('@/assets/p3.webp')}
          ]
      }
  }
};
</script>
<style lang="scss" scoped>
.product-detail-info {
    font-size: 15px;
}
.option-detail-table, .service-detail {
    padding: 0 15px;
}
.van-image {
    display: block;
}
.empty {
    height: 800px;
}
</style>