import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/main',
    component: require('./main')
}, {
    path: '/',
    redirect: '/main'
}]

const router = new VueRouter({
    routers
})

const app = new Vue({
    el: '#app',
    router: router,
    components: {
        App: require('./app')
    },
    template: '<app></app>'
})