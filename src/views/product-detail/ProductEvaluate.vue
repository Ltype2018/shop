<template>
  <div class="evaluate">
    <!--评价标题 -->
    <header class="evaluate-header">
      <van-cell value="好评率 100%" icon="star">
        <template #title>
          <span class="evaluate-title">评价</span>
          <span>40+</span>
        </template>
      </van-cell>
    </header>
    <!--评价框 -->
    <section class="evaluate-item-container">
      <div class="evaluate-item" v-for="item in evaluates" :key="item.author">
        <van-cell :key="item.author" :value="item.date" style="padding:0 16px">
          <template #title>
            <div class="evaluate-info">
              <span>{{item.author}}</span>
              <van-rate v-model="rates" color="red" size="16" readonly />
            </div>
          </template>
        </van-cell>
        <van-cell :value="item.content" />
        <van-divider/>
      </div>
    </section>
  </div>
</template>

<script>
import { getEvaluateApi } from "@/api/evaluateApi";
export default {
  name: "Evaluate",
  data() {
    return {
      rates: 5,
      evaluates: {}
    };
  },
  mounted() {
    getEvaluateApi().then(res => {
      console.log("加载评价");
      this.evaluates = res.data.evaluates;
    });
  }
};
</script>

<style lang="scss" scoped>
.evaluate-info {
  display: flex;
  align-items: center;
}

.evaluate-item {
  /deep/ .van-cell::after {
    display: none !important;
  }
}
.van-divider {
    margin: 0;
}
.van-cell {
  /deep/ .van-cell__title {
    flex-grow: 3;
  }
}
</style>