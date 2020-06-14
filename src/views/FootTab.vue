<template>
    <div class="foot-tab">
        <van-tabbar v-model="active">
            <van-tabbar-item name="home" icon="wap-home">首页</van-tabbar-item>
            <van-tabbar-item name="shopping-cart" icon="shopping-cart">购物车</van-tabbar-item>
            <van-tabbar-item name="user" icon="manager">个人中心</van-tabbar-item>
            <van-tabbar-item name="surrounding-shop" icon="map-marked">周边门店</van-tabbar-item>
            <van-tabbar-item name="v-shop" icon="shop">微店列表</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name:'foot-tab',
    data(){
        return{
            active:'home'
        }
    }
}
</script>
