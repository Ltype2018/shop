<template>
  <div class="userHeader">
    <section class="user_info" style="margin-top:0px">
      <van-row type="flex" justify="space-around">
        <van-col>
          <van-image :src="cat" round width="100px" height="100px" />
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-around">
        <van-col>cat</van-col>
        <van-col>vip0</van-col>
      </van-row>
      <van-row type="flex" justify="space-around">
        <van-col>0</van-col>
        <van-col>0</van-col>
      </van-row>
      <van-row type="flex" justify="space-around">
        <van-col>收藏的商品</van-col>
        <van-col>|</van-col>
        <van-col>收藏的店铺</van-col>
      </van-row>
    </section>
  </div>
</template>

<script>
export default {
  name: "UserHeader"
};
</script>