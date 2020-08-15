<template>
  <div class="discover_group_circle">
    <header>
      <van-nav-bar title="圈子详情" left-arrow @click-left="onClickLeft" />
    </header>
    <main>
      <section class="circle_head" :style="{backgroundImage:`url(${circle.head.background_img})`}">
        <h1>圈子百态</h1>
        <div>嘿，终于等到你</div>
        <span>{{circle.head.members}}个小伙伴·{{circle.head.content_total}}条精选内容</span>
      </section>
      <section class="circle_content">
        <van-list v-model="loading" :finished="finished"  :immediate-check="status" finished-text="已加载所有内容" @load="onLoad">
          <van-grid :column-num="2" :border="false">
            <van-grid-item v-for="content in contents" :key="content.title">
              <ContentCard :content="content" />
            </van-grid-item>
          </van-grid>
        </van-list>
      </section>
    </main>
    <div class="empty"></div>
  </div>
</template>

<script>
import { getCircleHeadData, getCircleContent,getCircleContentTest } from "@/api/groupApi";
import ContentCard from "@/components/ContentCard";
export default {
  name: "DiscoverGroupCircle",
  components: {
    ContentCard
  },
  data() {
    return {
      circle: {
        head: {},
        content: []
      },
      contents: [],
      loading:false,
      finished:false,
      status:false
    };
  },
  methods:{
      onLoad(){
          setTimeout(() =>{
              getCircleContentTest().then(res =>{
                  this.contents.push(...res.data)
                  this.loading=false
                  this.finished = true
                  },4000)
          })
      },
      onClickLeft(){
          this.$router.go(-1)
      }
  },
  mounted() {
    getCircleHeadData().then(res => (this.circle.head = res.data));
    getCircleContent().then(res => (this.contents = res.data));
  }
};
</script>

<style lang="scss" scoped>
.circle_head {
  padding: 150px 0 20px 20px;
  color: snow;
}

.van-grid-item {
  padding: 3px;
  background-color: #f7f7f7;
  border-radius: 15px;
}
.van-grid-item >>> .van-grid-item__content {
  padding: 0px;
}
.empty {
  height: 60px;
}
</style>