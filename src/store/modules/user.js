import {login, getUserInfo} from '@/api/userApi'
import { getToken,setToken, removeToken} from '@/utils/auth'
const state = {
    token:getToken(),
    username:'',
    avatar:'',
    introduction:{}
}

//mutations
const mutations = {
    SET_TOKEN(state, token){
        state.token = token
    },
    SET_INTRODUCTION(state, introduction){
        state.introduction = introduction
    },
    SET_USERNAME(state, username){
        state.username = username
    },
    SET_AVATAR(state, avatar){
        state.avatar = avatar
    }
}

//actions
const actions = {
    /**
     * 用户登录并获取token
     * @param {*} param0 
     * @param {*} loginForm 登录信息
     */
    login({commit}, loginForm){
        return login(loginForm).then(res =>{
            const {data} = res
            commit('SET_TOKEN',data.token)
            setToken(data.token)
        })
    },

    /**
     * 获取并在state配置用户信息
     * @param {*} param0 
     */
    getUserInfo({commit, state}){
         return getUserInfo(state.token).then(res =>{
             const {data} = res
             const {username, avatar, introduction} = data
             commit('SET_USERNAME',username)
             commit('SET_AVATAR',  avatar)
             commit('SET_INTRODUCTION', introduction)
         })
    },

    /**
     * 登出
     * @param {*} param0 
     */
    logOut({commit, state, dispatch}){
        commit('SET_TOKEN', '')
        removeToken()

    },
 
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}