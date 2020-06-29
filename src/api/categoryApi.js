import instance from '@/utils/https'
import base from '@/utils/base'

/**
 * 获取商品分类
 */
const getCategory = () =>instance({
    url:base.category,
    method:'get'
})

export {getCategory}