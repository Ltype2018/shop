import Home from '@/views/Home'
import HomeContent from '@/components/HomeContent'

const routes = [
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'home-content',
                component:HomeContent,
            }
        ]
    }
]

export default routes