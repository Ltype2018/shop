<template>
    <div class="home">
        <router-view></router-view>
     <FootTab/>   
    </div>
</template>

<script>
import FootTab from '@/views/FootTab'
export default {
    name:'Home',
    components:{
        FootTab
    }
}
</script>