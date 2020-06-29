<template>
    <div class="together_buy_container">
        <van-cell size="large" is-link value="更多">
            <template #title>
                <span>今日</span>
                <van-tag plain type="danger" size="large">必拼</van-tag>
            </template>
        </van-cell>
        <van-row type="flex">
            <van-col v-for="product in products" :key="product.price">
                <van-image :src="product.url"/>
                <div style="font-weigth:bolder; color:red">{{product.price}}</div>
                <div>{{product.members}}人已拼</div>
            </van-col>
        </van-row>
    </div>
</template>

<script>
import {getTogetherBuy} from '@/api/groupApi'
export default {
    name:"TogetherBuy",
    data(){
        return{
            products:[]
        }
    },
    mounted(){
       getTogetherBuy().then(res =>this.products = res.data)
    }
}
</script>

<style lang="scss"  scoped>
.together_buy_container{
    background-color: #f7f7f7;
}
.van-cell__title{
    font-size: 20px;
    font-weight: bold;

    .van-tag--large{
        font-size: 20px;
    }
}
.van-row{
    overflow-x: auto;
    white-space: nowrap;

    .van-col{
        width: 200px;
        height: 160px;
        font-size: 15px;
        margin-left: 8px;
        text-align: center;

        .van-image{
            width: 100px;
            height: 100px;
        }
    }
}
</style>