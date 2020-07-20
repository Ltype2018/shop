<template>
  <!--登录框-->
  <div class="login">
    <header>
      <section class="login-header">
        <van-image :src="mallLog" />
        <div>商城登录</div>
      </section>
    </header>
    <div class="login-container">
      <van-form @submit="onSubmit">
        <van-field
          ref="phoneNumber"
          v-model="loginForm.phoneNumber"
          label="+86"
          placeholder="手机号码"
          :rules="[{ pattern:/^[1]([3-9])[0-9]{9}$/}]"
        />
        <van-field
          ref="sms"
          style="margin-bottom:30px"
          v-model="loginForm.sms"
          center
          clearable
          placeholder="短信验证码"
          :rules="[{pattern:/^\d{6}$/}]"
        >
          <template #button>
            <van-button size="small" type="primary" native-type="button">获取验证码</van-button>
          </template>
        </van-field>
        <div style="margin:16px">
          <van-button round block type="danger" native-type="submit">立即登录/注册</van-button>
        </div>
      </van-form>
    </div>
    <section class="login-other">
      <van-divider>其他方式登录</van-divider>
      <div>
        <van-icon size="30" :name="wechatLog" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      mallLog: require("@/assets/mall.png"),
      wechatLog: require("@/assets/wechat.png"),
      loginForm: {
        phoneNumber: "13366666666",
        sms: "123456"
      }
    };
  },
  mounted() {
    if (this.loginForm.phoneNumber === "") {
      this.$refs.phoneNumber.focus();
    } else if (this.loginForm.sms === "") {
      this.$refs.sms.focus();
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('user/login',this.loginForm).then(() =>{
        let redirect = decodeURIComponent(this.$route.query.redirect || '/home/home-content')
        this.$router.push({
          path:redirect
        })
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  padding: 60px 20px 0 20px;
  .login-header {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .van-image {
      width: 100px;
      height: 100px;
      margin-bottom: 20px;
    }

    div {
      display: flex;
      align-self: center;
      margin-bottom: 20px;
    }
  }
}
.login-container {
  margin-bottom: 30px;
}
.login-other {
  .van-divider {
    margin-bottom: 10px;
  }

  div {
    text-align: center;
  }
}
.van-cell {
  /deep/ .van-field__label {
    width: 40px;
  }
}
</style>