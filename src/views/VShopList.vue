<template>
  <!--微店列表组件-->
  <div class="v-shoplist">
    <template v-for="vshop in vshopList" >
      <VShop :vshop="vshop" :key="vshop.shopname" />
    </template>
  </div>
</template>

<script>
import VShop from "@/components/VShop";
import { mapState} from "vuex";
export default {
  name: "VShopList",
  components: { VShop },
  computed: mapState("vshop_list", {
    vshopList: "vshopList"
  }),
  mounted() {
    this.$store.dispatch("vshop_list/getShopList");
  }
};
</script>