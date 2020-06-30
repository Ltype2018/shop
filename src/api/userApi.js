import instance from '@/utils/https'
import base from '@/utils/base'
import Qs from 'qs'


/**
 * @param {*} data 提交的登陆参数 
 */
const login = (data)=>instance({
    url:base.login,
    method:'post',
    data:Qs.stringify(data)
})

/**
 * 获取用户信息
 * @param {*} token  服务器的token 
 */
const getUserInfo = (token) =>instance({
    url:base["user-info"],
    method:'get',
    params:{token}
})


export {login, getUserInfo}