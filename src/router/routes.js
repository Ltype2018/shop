import Home from '@/views/Home'
import HomeContent from '@/views/HomeContent'
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
                component: () =>import('@/views/ShoppingCart')
            },
            {
                path: 'discover',
                component:() => import('@/views/Discover')
            },
            {
                path: 'user',
                component: () => import('@/views/User')
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
                component: () => import('@/views/Categories')
            },
            {
                path: 'circle',
                component: () => import('@/views/DiscoverGroupCircle')
            }
        ],
    },
    {   //将商品id传参到详情页面
        path: '/product/detail/:id',
        component: () => import('@/components/ProductDetail'),
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
        component: () => import('@/views/Shop')
    }

]

export default routes