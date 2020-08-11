import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import shopping_cart from './modules/shopping_cart'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
   modules:{
     user,
     products,
     shopping_cart
   }
})
