//商品信息模块
import { fetchProducts,fetchProductDetail } from '@/api/productsApi'

const state = {
    productsList: [],
    product_detail:{}
}

//mutations
const mutations = {
    UPDATE_PRODUCTS(state, productsList) {
        state.productsList = productsList
    },
    UPDATE_PRODUCT_DETAIL(state, product_detail){
        state.product_detail = product_detail
    }
}

//actions
const actions = {
    getProducts({ commit }) {
        fetchProducts().then(res => {
            commit('UPDATE_PRODUCTS', res.data.productsList)
        })
    },
    getProductDetail({commit}){
        fetchProductDetail().then(res =>{
            console.log('获取商品详情')
            commit('UPDATE_PRODUCT_DETAIL',res.data.product)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}