import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router'
import { SwipeCell,Checkbox,Card,Button,Tabbar,TabbarItem,Swipe,SwipeItem,Lazyload,Grid, GridItem,Image as VanImage,Toast } from 'vant';

Vue.use(SwipeCell).use(Checkbox).use(Card).use(Button).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(VanImage).use(Toast)
.use(Grid).use(GridItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
