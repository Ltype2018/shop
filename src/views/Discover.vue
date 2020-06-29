<template>
  <div class="discover">
    <section class="groups">
      <DiscoverGroup :groups="groups" />
    </section>
    <van-divider />
    <section class="together_buy">
      <TogetherBuy/>
    </section>
    <section class="discover_shops">
        <DiscoverShop />
    </section>
  </div>
</template>

<script>
import DiscoverGroup from "./DiscoverGroup";
import DiscoverShop from "./DiscoverShop"
import TogetherBuy from '@/components/TogetherBuy'
import { getGroupData } from "@/api/groupApi";
export default {
  name: "Discover",
  components: {
    DiscoverGroup,
    DiscoverShop,
    TogetherBuy
  },
  data() {
    return {
      groups: []
    };
  },
  mounted() {
    getGroupData().then(res => {
      console.log(res.data);
      this.groups = res.data;
    });
  }
};
</script>

<style scoped>

section{
  margin-bottom: 10px;
}
.groups_title {
  font-size: 15px;
  font-weight: bold;
}
</style>