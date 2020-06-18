<template>
    <div class="foot-tab">
        <van-tabbar v-model="active">
            <van-tabbar-item name="home" icon="wap-home" to="/home/home-content">首页</van-tabbar-item>
            <van-tabbar-item name="shopping-cart" icon="shopping-cart" :badge="itemsLength" to="/home/shopping-cart">购物车</van-tabbar-item>
            <van-tabbar-item name="user" icon="manager" to="/home/user">个人中心</van-tabbar-item>
            <van-tabbar-item name="shops-nearby" icon="map-marked" to="/home/shops-nearby">周边门店</van-tabbar-item>
            <van-tabbar-item name="v-shop" icon="shop" to="/home/v-shoplist">微店列表</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'foot-tab',
    data(){
        return{ 
            active:'home'
        }
    },
    computed:mapGetters('shopping_cart',['itemsLength']) 
}
</script>
