import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        // component: Home
    },
    {
        path: '/about',
        name: 'About',

        // which is lazy-loaded when the route is visited.
        // component: () =>
        //     import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router