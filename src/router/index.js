import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import Product from "../views/Product.vue"
import SingleProduct from "../views/SingleProduct.vue"
import  store  from "../store";
const routes = [
   {
     path: "/",
     name: "Home",
     component: Home,
},
{
  path: "/product",
  name: "Product",
  component: Product,
  meta: { requiresLogin: true }
},
{
  path: "/product/:id",
  name: "SingleProduct",
  component: SingleProduct,
  meta: { requiresLogin: true }
},  
        {
          path: "/login",
          name: "Login",
          component: Login,
          meta: { requiresGuest: true },
          },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

   router.beforeEach((to, from, next) => {
  if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
    next("/");
  } else {
    next()
  }
});
 router.beforeEach((to, from, next) => {
  if (to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
    next("/login");
  } else {
    next()
  }
});

export default router;