import Vue from 'vue/dist/vue.js'
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
    routes
})

const app = new Vue({
    el: '#app',
    router: router,
    components: {
        App: require('./app')
    },
    template: '<app></app>'
})