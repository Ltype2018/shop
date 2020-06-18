import Home from '@/views/Home'
import HomeContent from '@/views/HomeContent'
import ShoppingCart from '@/views/ShoppingCart'
import VShopList from '@/views/VShopList'
import User from '@/views/User'
import ShopsNearby from '@/views/ShopsNearby'

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
                path:'shops-nearby',
                component:ShopsNearby
            }
        ]
    }
]

export default routes