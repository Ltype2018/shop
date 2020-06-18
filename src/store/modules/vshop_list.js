//商家模块
import {fetchShopList} from '@/api/productsApi'
const state = {
    vshopList:[]
}

const mutations ={
    UPDATE_SHOPLIST(state, vshopList){
        state.vshopList = vshopList
    }
}

const actions = {
    getShopList({commit}){
        fetchShopList().then(res =>commit('UPDATE_SHOPLIST', res.data.vshopList))
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}