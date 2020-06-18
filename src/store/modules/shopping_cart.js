//购物车数据模块

const state = {
    items:[]
}


//getters
const getters = {
    itemsLength(state){
        return state.items.length 
    },
    /**
     * 
     * @param {*} state 
     * @param {*} getters 
     * @param {*} rootState
     * //将cart里的元素与products相匹配，生成cartProducts 属性 
     */
    cartProducts(state, getters, rootState){
        return state.items.map(({id, quantity,checked}) =>{
            console.log(rootState.productsList)
            const product = rootState.products.productsList.find(product =>product.id === id)
            return{
                title:product.title,
                price:product.price,
                img:product.img,
                id:product.id,
                quantity,
                checked:checked
            }
        })
    },
    filteredCartProducts(state,getters){
         return getters.cartProducts.filter(value =>value.checked)
    },
    /**
     * //计算商品总价
     * @param {*} state 
     * @param {*} getters 
     */
    cartTotalPrice(state, getters){
        return getters.filteredCartProducts.reduce((total, product) =>{
            return total + product.price * product.quantity
        },0)
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
    pushProductToCart(state, {id}){
        state.items.push({
            id,
            quantity:1,
            checked:true
        })
    },
    incrementItemQuantity(state, {id}){
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
    },
    decrementItemQuantity(state,{id}){
        const cartItem = state.items.find(item =>item.id === id)
        cartItem.quantity--
    },
    setChecked(state,status){
        state.items.forEach(element => {
            element.checked = status
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
    addProductToCart({state, commit}, product){
        const cartItem = state.items.find(item => item.id === product.id)
        if(!cartItem){
            commit('pushProductToCart',{id:product.id})
        }else{
            commit('incrementItemQuantity', cartItem)
        }
    },
 
}
export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}