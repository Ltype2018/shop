<template>
  <div class="orderList">
    <div v-for="item in list" :key="item.id">
      <van-checkbox v-model="item.checked"></van-checkbox>
      <van-swipe-cell>
        <van-card
          :key="item.id"
          :num="item.num"
          :title="item.title"
          :price="item.price"
          class="list-card"
        >
          <template #footer>
            <van-button size="medium" @click="addNum(item)">+</van-button>
            <van-button size="medium" @click="reduceNum(item)">-</van-button>
          </template>
        </van-card>
        <template #right>
          <van-button
            square
            text="Delete"
            type="danger"
            class="delete-button"
            @click="remove(item)"
          ></van-button>
        </template>
      </van-swipe-cell>
    </div>
    <van-checkbox v-model="isAllChecked" >全选</van-checkbox>
    <span>{{totalPrice}}</span>
  </div>
</template>

<script>
export default {
  name: "orderList",
  data() {
    return {
      list: [
        {
          id: 1,
          title: "aaaaaa",
          price: 100,
          num: 2,
          icon: "特价",
          checked: true
        },
        {
          id: 2,
          title: "bbbbbbb",
          price: 10,
          num: 8,
          icon: "特价",
          checked: true
        },
        {
          id: 3,
          title: "cccc",
          price: 1,
          num: 7,
          icon: "特价",
          checked: true
        },
        {
          id: 4,
          title: "ddddd",
          price: 1000,
          num: 6,
          icon: "特价",
          checked: true
        }
      ]
    };
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.list
        .filter(value => value.checked)
        .map(value => (total = total + value.num * value.price));
      return total;
    },
    isAllChecked: {
      get: function() {
        let length = this.list.filter(value => value.checked).length;
        return length === this.list.length ? true : false;
      },
      set: function(val){
          this.list.map(value => value.checked = val)

      }
    }
  },
  methods: {
    addNum(item) {
      item.num += 1;
    },
    reduceNum(item) {
      item.num -= 1;
    },
    remove(item) {
      this.list.splice(this.list.indexOf(item), 1);
    }
  }
};
</script>

<style scoped>
.delete-button {
  height: 100%;
}
</style>