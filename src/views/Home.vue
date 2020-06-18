<template>
  <div class="home">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <FootTab />
  </div>
</template>

<script>
import FootTab from "@/views/FootTab";
export default {
  name: "Home",
  components: {
    FootTab
  }
};
</script>