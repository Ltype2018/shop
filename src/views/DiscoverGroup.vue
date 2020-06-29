<template>
<div style="padding:0 20px">
  <h3 style="margin-bottom:10px">有趣的圈子</h3>
    <div class="discover_group">
    <section class="discover_group_item" v-for="item in groups" :key="item.title">
      <van-image round width="70px" height="70px" lazy-load :src="item.url" fit="cover" />
      <div style="font-size:15px;font-weight:bold">{{item.title}}</div>
    </section>
  </div>
</div>

</template>

<script>
export default {
  name: "DiscoverGroup",
  props: {
    groups: Array
  }
};
</script>

<style scoped>
.discover_group {
  display: flex;
  overflow-x: scroll;

}
.discover_group_item {
  width: 100px;
  height: 100px;
  text-align: center;
  flex-shrink: 0;
  white-space: nowrap;
}
.van-image{
  display: block;
     margin-left: auto; 
    margin-right:auto; 
}
::-webkit-scrollbar {
  display: none;
}
</style>