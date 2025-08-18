import { createWebHistory, createRouter } from "vue-router";

import Home from '@/pages/Home.vue';
import ProductDetail from "@/pages/ProductDetail.vue";
import Cart from "@/pages/Cart.vue";

const routes = [{
    path: "/",
    name: "Product Catalogue",
    component: Home
},
{
    path: "/product",
    name: "Product",
    component: ProductDetail
}, {
    path: "/cart",
    name: "Cart",
    component: Cart
}];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;