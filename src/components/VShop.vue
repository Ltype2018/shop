<template>
<!-- 微店组件 -->
  <div class="v_shop">
    <van-card 
      :desc="`宝贝数${vshop.totalgoods}|关注度${vshop.follower}`"
      :title="vshop.shopname"
      :thumb="vshop.photo"
    >
      <template #tags>
        <van-tag plain type="danger">{{vshop.shopname}}</van-tag>
      </template>
    </van-card>
    <van-grid :border="false" :column-num="4">
        <van-grid-item v-for="item in vshop.goodsphotos" :key="item.url">
            <van-image :src="item.url" />
        </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "VShop",
  props: ["vshop"]
};
</script>