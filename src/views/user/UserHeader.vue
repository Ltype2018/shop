<template>
  <div class="userHeader">
    <section class="user-info" v-if="username">
      <div class="user-left">
        <van-image width="60px" height="60px" round :src="avatar" />
      </div>
      <div class="user-right">
        <p>欢迎你 {{username}}</p>
        <p>{{introduction.level}}</p>
      </div>
    </section>
    <section class="user-info" v-else>
      <div class="user-left">
        <van-image width="60px" height="60px" round :src="unlogImg" />
      </div>
      <div class="user-right">
        <router-link to="/login">
          <p>登录/注册</p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "UserHeader",
  data() {
    return {
      unlogImg: require("@/assets/unlogImg.jpg")
    };
  },
  computed: {
    ...mapState("user", ["avatar", "introduction", "username"])
  }
};
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  padding: 20px 0 0 30px;
  height: 100px;
  font-size: 15px;
  color: #f5f5f5;
  background-color: #ee0a24;

  div {
    align-self: center;
  }
  .user-left {
    flex-grow: 1;
  }
  .user-right {
    flex-grow: 10;
  }
}
</style>