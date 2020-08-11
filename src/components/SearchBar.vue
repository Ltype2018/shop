<template>
    <div class="search-bar">
        <van-cell-group>
            <van-field v-model="searchInput" left-icon="search" />
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name:"SearchBar",
    data(){
        return{
            searchInput:''
        }
    }
}
</script>

<style lang="scss" scoped>
.search-bar{
    /deep/ .van-cell-group{
    background-color:red;
}
}
</style>
