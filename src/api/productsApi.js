import instance from '@/utils/https'
import base from '@/utils/base'

/**
 * 获取商品列表信息
 */
const fetchProducts = () =>instance({
    url:base["products-list"],
    method:'get'
})

/**
 * 获取商家列表
 */
const fetchShopList = () =>instance({
    url:base["vshop-list"],
    method:'get'
})


export {fetchProducts,fetchShopList}