<template>
    <div class="shop-header">
        <header>
            <ShopHeaderInfo/>
        </header>
        <section class="search-bar">
            <SearchBar/>
        </section>
        
    </div>
</template>


<script>
import ShopHeaderInfo from './ShopHeaderInfo'
import SearchBar from '@/components/SearchBar'
export default {
    name:"ShopHeader",
    components:{
        ShopHeaderInfo,
        SearchBar 
    }
}
</script>

<style lang="scss" scoped>
.shop-header{
    padding:18px 10px 10px 10px;
    
}
</style>