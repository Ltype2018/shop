<template>
  <div class="classification">
    <van-tabs>
      <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">内容 {{ index }}</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "Classification"
};
</script>