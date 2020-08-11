import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router'
import { SwipeCell,Rate, NavBar, List, Form, Field, Skeleton, Divider, Stepper, Sidebar, SidebarItem, GoodsAction, Sku, Tab, Tabs, GoodsActionIcon, AddressList, GoodsActionButton, SubmitBar, Checkbox, Card, Button, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload, Grid, GridItem, Image as VanImage, Toast, Cell, CellGroup, Icon, Col, Row, Empty, Tag } from 'vant';

Vue.use(SwipeCell).use(Checkbox).use(Card).use(Button).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(VanImage).use(Toast)
  .use(Grid).use(GridItem).use(Rate).use(Cell).use(CellGroup).use(Icon).use(Col).use(Row).use(Empty).use(Tag).use(AddressList).use(Tab).use(Tabs).use(Field)
  .use(SubmitBar).use(NavBar).use(List).use(Form).use(Skeleton).use(Divider).use(Stepper).use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon).use(Sku).use(Sidebar).use(SidebarItem)

Vue.config.productionTip = false
Vue.filter('numFilter', function(value){
  return Number(value).toFixed(2)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
