<template>
  <!--登录框-->
  <div class="login">
    <div class="login-container">
      <van-form @submit="onSubmit">
        <van-field
          v-model="loginForm.phoneNumber"
          label="+86"
          placeholder="手机号码"
          :rules="[{ pattern:/^[1]([3-9])[0-9]{9}$/, message:'手机号错误'}]"
        />
        <van-field
          v-model="loginForm.sms"
          center
          clearable
          placeholder="短信验证码"
          :rules="[{pattern:/^\d{6}$/, message:'输入正确验证码'}]"
        >
          <template #button>
            <van-button size="small" type="primary">获取验证码</van-button>
          </template>
        </van-field>
        <div style="margin:16px">
          <van-button round block type="info" native-type="submit">立即登录/注册</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        phoneNumber: "",
        sms: ""
      }
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    }
  }
};
</script>

<style lang="scss" scoped>
.van-cell {
  /deep/ .van-field__label {
    width: 40px;
  }
}
</style>