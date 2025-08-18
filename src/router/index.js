import { createWebHistory, createRouter } from "vue-router";

import Home from "@/pages/Home.vue";
import ProductDetail from "@/pages/ProductDetail.vue";
import Cart from "@/pages/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Product Catalogue",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/product/:id",
    name: "Product Detail",
    component: ProductDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
