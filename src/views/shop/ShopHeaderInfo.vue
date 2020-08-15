<template>
    <div class="shop-header-info">
        <div class="left">
          <div class="left-shop-img">
              <van-image :src="shop.avatar"  width="60" height="60"/>
          </div>
          <div class="left-shop-info">
              <div>{{shop.name}}</div>
          </div>
        </div>
        <div class="right">
            <div class="right-follow-panel">
                <div class="collect-bar"><van-icon name="star-o"/>收藏</div>
                <div class="follow-number">
                    {{shop.followers}}人收藏
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { getShopData } from "@/api/shopApi";
export default {
    name:"ShopHeaderInfo",
    data(){
        return{
            shop:{}
        }
    },
    mounted(){
        getShopData().then(res => this.shop = res.data.shop)
    }
}
</script>

<style lang="scss" scoped>
.shop-header-info {
    display: flex;
    flex-wrap: nowrap;

    .left{
        display: flex;
        flex: 3;
    }

    .right{
        display: flex;
        flex: 1;
        font-size: 14px;

        .collect-bar{
            display: flex;
            width: 70px;
            height: 30px;
            justify-content: center;
            align-items: center;
            background-color: #ff0000;
            color: #f5f5f5;
            border-radius: 20px;
        }
    }
}
</style>