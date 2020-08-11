<template>
  <div class="address">
    <van-nav-bar
      title="地址栏"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
export default {
  name: "Address",
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13022228888",
          address: "湖南省长沙市长沙县蓝山郡 10 楼 606 室",
          isDefault: true
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "湖北省武汉市洪山区南湖花园"
        }
      ]
    };
  },
  methods:{
      onClickLeft(){
          this.$router.go(-1)
      }
  }
};
</script>