import Vue from 'vue'
import VueRouter from 'vue-router'

import AppHome from "./components/AppHome.vue";
import AppListaDeCompras from "./components/AppListaDeCompras.vue";
import AppAlacenaVirtual from "./components/AppAlacenaVirtual.vue";
import AppLogin from "./components/AppLogin.vue";
import AppConfig from "./components/AppConfig.vue";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: AppHome,
    },
    {
        path: '/login',
        name: 'login',
        component: AppLogin,
    },
    {
        path: '/config',
        name: 'config',
        component: AppConfig,
    },
    {
        path: '/lista-de-compras',
        name: 'listaDeCompras',
        component: AppListaDeCompras,
    },
    {
        path: '/alacena-virtual',
        name: 'alacenaVirtual',
        component: AppAlacenaVirtual,
    },
]

const router = new VueRouter({
    routes
})

export default router;