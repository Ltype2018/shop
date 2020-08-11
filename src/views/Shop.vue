<template>
    <div class="shop">
        <ShopHeader/>
        <ShopProducts/>
    </div>
</template>

<script>
import ShopHeader from './ShopHeader'
import ShopProducts from './ShopProducts'
export default {
    name:"Shop",
    components:{
        ShopProducts,
        ShopHeader
    }
}
</script>


