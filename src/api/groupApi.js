
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

const getCircleHeadData = () =>instance({
    url:base["circle-head"],
    method:"get"
})

const getCircleContent = () =>instance({
    url:base["circle-content"],
    method:"get"
})

const getCircleContentTest = () =>instance({
    url:base["circle-content-test"],
    method:"get"
})
export {getGroupData,getDiscoverShop, getTogetherBuy, getCircleHeadData, getCircleContent,getCircleContentTest}