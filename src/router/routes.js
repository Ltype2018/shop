import Home from '@/views/Home'
import HomeContent from '@/views/HomeContent'
import ShoppingCart from '@/views/ShoppingCart'
import VShopList from '@/views/VShopList'
import User from '@/views/User'
import Classification from '@/views/Classification'
import ProductDetail from '@/components/ProductDetail'

import Address from '@/components/Address'


const routes = [
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'home-content',
                component:HomeContent,
            },
            {
                path:'shopping-cart',
                component:ShoppingCart
            },
            {
                path:'v-shoplist',
                component:VShopList
            },
            {
                path:'user',
                component:User
            },
            {
                path:'classification',
                component:Classification
            },
        ],
    },
    {   //将商品id传参到详情页面
        path:'/product/detail/:id',
        component:ProductDetail,
        props:true
    },
    {
        path:'/address',
        component:Address
    }
]

export default routes