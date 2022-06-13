import Vue from 'vue'
import VueRouter from 'vue-router'

import AppHome from "./components/AppHome.vue";
import AppListaDeCompras from "./components/AppListaDeCompras.vue";
import AppAlacenaVirtual from "./components/AppAlacenaVirtual.vue";
//import AppAgregarProductos from "./components/AppAgregarProductos.vue";
import LoginComponent from "./components/LoginComponent";
import AppConfig from "./components/AppConfig.vue";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: AppHome,
        meta: { login: true }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginComponent,
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
    /* {
        path: '/agregar-productos',
        name: 'agregarProducto',
        component: AppAgregarProductos,
    }, */
    {
        path: '/realizar-compra"',
        name: 'realizarCompra',
        component: AppAlacenaVirtual,
    },

]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    //console.log(to);

    next();
})

export default router;