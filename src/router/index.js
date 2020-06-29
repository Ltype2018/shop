import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'


/**
 * 解决重复点击菜单栏报错，Error: Avoided redundant navigation to current location
 */
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}



Vue.use(VueRouter)
const router = new VueRouter({
    mode:'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
          return {
            selector: to.hash
          }
        }else if(savedPosition){
            return savedPosition
        }
      }
})

export default router 

