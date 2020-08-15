<!--顶部导航栏-->
<template>
  <div class="nav-bar">
    <van-nav-bar
      :title="bar.title"
      left-arrow
      @click-left="onClickLeft"
      @click-right.stop="onClickRight"
    >
      <template #right>
        <van-icon name="weapp-nav" />
      </template>
    </van-nav-bar>
    <div ref="navbarList" class="nav-bar-list" v-if="show">
      <!--悬浮导航块-->
      <div>
        <router-link to="/home/home-content">
          <van-icon name="wap-home-o" />首页
        </router-link>
      </div>
      <div>
        <router-link to="/home/category">
          <van-icon name="apps-o" />分类
        </router-link>
      </div>
      <div>
        <router-link to="/home/discover">
          <van-icon name="browsing-history-o" />圈子
        </router-link>
      </div>
      <div>
        <router-link to="/home/user">
          <van-icon name="manager-o" />个人中心
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    bar: {
      type: Object,
      default: () => ({ title: "cdgg" }),
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.show = !this.show;
    },
  },
  
  mounted() {
    //点击其他地方关闭navbarList
    let _this = this;
    document.addEventListener("click", function (e) {
      if (_this.$refs.navbarList) {
        if (_this.$refs.navbarList.contains(e.target)) return;
        _this.show = false;
      }
    });
  },

};
</script>

<style lang="scss" scoped>
.nav-bar-list {
  position: absolute;
  right: 10px;
  top: 45px;
  z-index: 999;
  padding-top: 10px;
  background-color: black;
  div {
    width: 120px;
    height: 40px;
    text-align: left;

    a {
      color: white;
    }
  }
}
</style>