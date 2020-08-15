import Home from '@/views/home/Home'
import HomeContent from '@/views/home/HomeContent'
import Login from '@/components/Login'



const routes = [ 
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: 'home-content',
                component: HomeContent,
            },
            {
                path: 'shopping-cart',
                component: () =>import('@/views/shopping-cart/ShoppingCart')
            },
            {
                path: 'discover',
                component:() => import('@/views/discover/Discover')
            },
            {
                path: 'user',
                component: () => import('@/views/user/User')
            },
            {
                path: 'address',
                component: () => import('@/components/Address')
            },
            {
                path: 'pay',
                component: () => import('@/components/Pay')
            },
            {
                path: 'category',
                component: () => import('@/views/categories/Categories')
            },
            {
                path: 'circle',
                component: () => import('@/views/discover/DiscoverGroupCircle')
            }
        ],
    },
    {   //将商品id传参到详情页面
        path: '/product/detail/:id',
        component: () => import('@/views/product-detail/ProductDetail'),
        props: true
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/',
        redirect:'/home/home-content'  
    },
    {
        path:'/home/shop',
        component: () => import('@/views/shop/Shop')
    }

]

export default routes