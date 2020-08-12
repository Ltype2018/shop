//购物车数据模块
import { Toast } from 'vant'
const state = {
    items: []
}


//getters
const getters = {
    itemsLength(state) {
        return state.items.reduce((total,item) =>{ return total + item.quantity}, 0)
    },
    /**
     * 
     * @param {*} state 
     * @param {*} getters 
     * @param {*} rootState
     * //将cart里的元素与products相匹配，生成cartProducts 属性 
     */
    cartProducts(state, getters, rootState) {
        return state.items.map(({ id, quantity, checked }) => {
            console.log('获取购物车商品')
            const product = rootState.products.productsList.find(product => product.id === id)
            return {
                title: product.title,
                price: product.price,
                img: product.previewImg,
                id: product.id,
                quantity,
                checked
            }
        })
    },
    filteredCartProducts(state, getters) {
        return getters.cartProducts.filter(value => value.checked)
    },
    /**
     * 
     * @param {*} state
     * 是否为全选 
     */
    allChecked(state){
        return state.items.every(item =>item.checked)
    },
    /**
     * 商品详情页，通过路由地址传参然后在商品列表中获取商品信息
     */
    productDetailInfo(state, getters, rootState) {
        return function (id) {
            console.log('获取商品详情')
            const product = rootState.products.productsList.find(product => product.id == id)
            return {
                title: product.title,
                price: product.price,
                img: product.img,
                id: product.id,
                previewImg:product.previewImg,
                address: product.address,
                label: product.label
            }
        }

    },
    /**
     * //计算商品总价
     * @param {*} state 
     * @param {*} getters 
     */
    cartTotalPrice(state, getters) {
        return getters.filteredCartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
    }
}


//mutations
const mutations = {
    /**
     * 
     * @param {*} state 
     * @param {*} param1 id: product 的id
     * //存入购买商品信息
     */
    pushProductToCart(state, { id, quantity }) {
        state.items.push({
            id,
            quantity,
            checked: true
        })
    },
    incrementItemQuantity(state, { id }) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
    },
    incrementProductQuantity(state, {id, quantity}){
        const cartItem = state.items.find(item =>item.id ===id)
        cartItem.quantity += quantity
    },
    decrementItemQuantity(state, { id }) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity--
    },
    changeQuantity(state,playload){
        const cartItem = state.items.find(item =>item.id ===playload.item.id)
        cartItem.quantity = playload.quantity
    },
    toggleItem(state,{id}){
        const cartItem = state.items.find(item =>item.id === id)
        console.log(cartItem.checked)
        cartItem.checked = !cartItem.checked
    },
  

    //全选
    toggleAll(state,status){
        return state.items.forEach(item => {
            item.checked = status
        });
    }
}
//actions
const actions = {
    /**
     * 
     * @param {*} param0 
     * @param {*} product 
     * //将商品添加到购物车，若不存在则创建，存在则购物车商品数量增加
     */
    addProductToCart({ state, commit }, {product,numbers}) {
        Toast.success("已加入购物车")
        const cartItem = state.items.find(item => item.id === product.id)
        if (!cartItem) {
            commit('pushProductToCart', { id: product.id, quantity:numbers })
        } else {
            commit('incrementProductQuantity', {id: product.id, quantity:numbers })
        }
    },

}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}