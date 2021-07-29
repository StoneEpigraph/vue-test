import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../component/Home'
import About from '../component/About'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About
        }
    ],
    mode: 'history'
})

export default router
