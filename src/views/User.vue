<template>
    <div class="user">
        <section class="user_info" style="margin-top:0px">
            <van-row type="flex" justify="space-around">
                <van-col><van-image :src="cat" round width="100px" height="100px" /></van-col>
            </van-row>
            <van-row type="flex" justify="space-around">
                <van-col>cat</van-col>
                <van-col>vip0</van-col>
            </van-row>
            <van-row type="flex" justify="space-around">
                <van-col>0</van-col>
                <van-col>0</van-col>
            </van-row>
            <van-row type="flex" justify="space-around">
                <van-col>收藏的商品</van-col>
                <van-col>|</van-col>
                <van-col>收藏的店铺</van-col>
            </van-row>
        </section>
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
    </div>
</template>

<script>
export default {
    name:"User",
    data(){
        return{
            cat:require('@/assets/cat.png')
        }
    }
    }
</script>

<style scoped>
.user_info{
    padding: 5px;
    background-color: red;
}

section{
    margin-top: 12px;
}
</style>