import instance from '@/utils/https'
import base from '@/utils/base'


const getEvaluateApi = () =>instance({
    url:base.evaluate,
    method:"get"
})

export {getEvaluateApi}