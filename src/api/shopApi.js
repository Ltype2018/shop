import instance from '@/utils/https'
import base from '@/utils/base'

//获取商店信息
const getShopData = () =>instance({
    url:base.shop,
    method:"get"
})

const getShopProduct = () =>instance({
    url:base["shop-products"],
    method:"get"
})
export {getShopData, getShopProduct}