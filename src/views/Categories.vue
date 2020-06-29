<template>
  <div class="category">
    <aside class="category_sidebar">
      <van-sidebar v-for="itembar in category" :key="itembar.id">
        <van-sidebar-item :title="itembar.title" :url="`/home/category#${itembar.name}`" />
      </van-sidebar>
    </aside>
    <div class="category_main">
      <div class="category_container" v-for="item in category" :key="item.id">
        <div class="category_container_item" :id="item.name">
          <van-row class="category_container_item_title" type="flex" justify="center">
            <van-col>{{item.title}}</van-col>
          </van-row>
          <van-grid :column-num="3" class="category_container_item_content">
            <van-grid-item v-for="value in 12" :key="value" >
              <van-image  :src="item.img"/>
              <van-row type="flex" justify="center" style="font-size:14px">
                <van-col>{{item.title}}</van-col>
              </van-row>
            </van-grid-item>
          </van-grid>  
        </div>
      </div>
      <div class="empty"></div>
    </div>
    
  </div>
</template>

<script>
import {getCategory} from '@/api/categoryApi'
export default {
  name: "Categories",
  data() {
    return {
      category: []
    };
  },
  mounted(){
    getCategory().then(res =>{
      this.category = res.data})
  }
};
</script>

<style scoped>
.van-sidebar-item{
  margin-top: 10px;
}
.category{
  display: flex;
  position: absolute;
  top:0 ;
  left: 0;
  right: 0;
  bottom: 0;
}
.category_sidebar{
  flex:none;
  width: 100px;
  overflow-y: scroll;
  display: block;
}
.category_main{
  flex: auto;
  overflow-y: scroll;
  
}
.category_container_item{
  margin-top: 20px;
}
.category_container_item_content{
  margin-top: 10px;
}
.van-sidebar-item--select::before {
  background-color: white;
}
.van-grid-item >>> .van-grid-item__content {
    padding: 0px;
}
.empty{
  height: 60px;
}
</style>