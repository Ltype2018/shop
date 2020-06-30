<template>
  <div class="user">
    <header>
      <UserHeader />
    </header>
    <main>
      <section class="user_order">
        <van-cell title="全部订单" is-link value="查看全部订单"></van-cell>
      </section>
      <section class="user_account">
        <van-cell title="我的优惠卷" icon="balance-pay" is-link></van-cell>
        <van-cell title="我的积分" icon="medal-o" is-link></van-cell>
        <van-cell title="我的资产" icon="balance-o" is-link></van-cell>
        <van-cell title="我的拼团" icon="friends-o" is-link></van-cell>
      </section>
      <section class="user_other">
        <van-cell title="收货地址管理" icon="location-o" is-link to="/home/address"></van-cell>
        <van-cell title="账户管理" icon="user-circle-o" is-link></van-cell>
      </section>
    </main>
  </div>
</template>

<script>
import UserHeader from './UserHeader'
export default {
  name: "User",
  components:{
      UserHeader
  }
};
</script>

<style scoped>

</style>