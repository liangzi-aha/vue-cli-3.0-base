import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import none from '@/components/404'
// import children from '@/components/children'

// vue.use 全局使用Router
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: "/",
            name:'HelloWorld',
            component: HelloWorld
        },
        {
            path:'/404',
            name:'none',
            component:none
        },
        // {
        //     path: '/children',
        //     name: 'children',
        //     component: children
        // }
    ]
})