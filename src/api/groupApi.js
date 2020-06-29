
import instance from '@/utils/https'
import base from '@/utils/base'

/**
 * 获取兴趣圈子数据
 */
const getGroupData =() => instance({
    url:base["group-data"],
    method:"get"
})

const getDiscoverShop = () =>instance({
    url:base["discover-shop"],
    method:"get"
})

const getTogetherBuy = () =>instance({
    url:base["together-buy"],
    method:"get"
})
export {getGroupData,getDiscoverShop, getTogetherBuy}