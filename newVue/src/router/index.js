import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// vue.use 全局使用Router
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: "/",
            name:'HelloWorld',
            component: HelloWorld
        }
    ]
})