<template>
    <div class="foot-tab">
        <van-tabbar v-model="active">
            <van-tabbar-item name="home" icon="wap-home-o" to="/home/home-content">首页</van-tabbar-item>
            <van-tabbar-item name="category" icon="apps-o" to="/home/category">分类</van-tabbar-item>
            <van-tabbar-item name="discover" icon="browsing-history-o" to="/home/discover">圈子</van-tabbar-item>
            <van-tabbar-item name="shopping-cart" icon="shopping-cart-o" :badge="itemsLength" to="/home/shopping-cart">购物车</van-tabbar-item>
            <van-tabbar-item name="user" icon="manager-o" to="/home/user">个人中心</van-tabbar-item>
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
