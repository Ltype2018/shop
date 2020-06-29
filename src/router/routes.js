import Home from '@/views/Home'
import HomeContent from '@/views/HomeContent'
import ShoppingCart from '@/views/ShoppingCart'
import Discover from '@/views/Discover'
import User from '@/views/User'
import Categories from '@/views/Categories'
import ProductDetail from '@/components/ProductDetail'
import Address from '@/components/Address'
import Pay from '@/components/Pay'


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
                path:'discover',
                component:Discover
            },
            {
                path:'user',
                component:User
            },
            {
                path:'address',
                component:Address
            },
            {
                path:'pay',
                component:Pay
            },
            {
                path:'category',
                component:Categories
            }
        ],
    },
    {   //将商品id传参到详情页面
        path:'/product/detail/:id',
        component:ProductDetail,
        props:true
    },

]

export default routes