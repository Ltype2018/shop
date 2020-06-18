<template>
    <div class="products-card">
        <van-grid :border="false" :column-num="2">
            <van-grid-item v-for="product in productsList" :key="product.id">
                <van-image lazy-load  :src="product.img"></van-image>
                <van-cell :title="product.title"/>
                <van-cell :title="`￥ ${product.price}`">
                    <template #right-icon>
                        <van-icon name="cart-circle-o" style="line-height:inherit;" @click.native="addProductToCart(product)"></van-icon>
                    </template>
                </van-cell>
                <van-cell :title="`销量:${product.sales}`"></van-cell>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:'ProductsCard',
    props:['productsList'],
    methods:mapActions('shopping_cart',['addProductToCart']
    )

    }


</script>
