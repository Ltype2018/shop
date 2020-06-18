import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import shopping_cart from './modules/shopping_cart'
import vshop_list from './modules/vshop_list'

Vue.use(Vuex)

export default new Vuex.Store({
   modules:{
     products,
     shopping_cart,
     vshop_list
   }
})
