<template>
  <div class="content_card">
    <div class="img-container">
      <van-image fit="fill" :src="content.cover" />
    </div>
    <div class="info-container">
      <div class="tag-container">
        <span>#{{content.tagname}}</span>
      </div>
      <div class="item-title">{{content.title}}</div>
      <div class="author-info">
        <div class="left-info">
          <van-image round width="30px" height="30px" :src="content.authorLogImg" />
          <span>{{content.author}}</span>
        </div>
        <div class="right-info">
          <van-icon name="eye-o" />
          <span style="width:3px"></span>
          <span>{{`${content.readers}`}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentCard",
  props: {
    content: Object
  }
};
</script>
<style lang="scss" scoped>
.info-container {
  .tag-container {
    font-size: 10px;
    color: rgb(144, 147, 150);
  }
}
.author-info {
  position: relative;
  display: flex;
  justify-content:space-between;
  align-items: center;

  div{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      color: rgb(122, 120, 121);

  }

}

</style>