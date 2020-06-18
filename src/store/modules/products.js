//商品信息模块
import { fetchProducts } from '@/api/productsApi'

const state = {
    productsList: []
}

//mutations
const mutations = {
    UPDATE_PRODUCTS(state, productsList) {
        state.productsList = productsList
    }
}

//actions
const actions = {
    getProducts({ commit }) {
        fetchProducts().then(res => {
            commit('UPDATE_PRODUCTS', res.data.products)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}