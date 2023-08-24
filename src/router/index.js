import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import Product from "../views/Product.vue";
import Brands from "../views/Brands.vue";
import Category from "../views/Category.vue";
import SingleProduct from "../views/SingleProduct.vue"; 
import Checkout from "../views/Checkout.vue"
import UserProfile from "../views/UserProfile.vue"
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
  
},
{
  path: "/brands",
  name: "Brands",
  component: Brands,

},
{
  path: "/category",
  name: "Category",
  component: Category,

},
{
  path: "/product/:slug",
  name: "SingleProduct",
  component: SingleProduct,

},  
{
  path: "/cart",
  name: "Cart",
  component: () => import("../views/Cart.vue"),
  meta: { requiresLogin: true }
}, 
{
  path: "/checkout",
  name: "Checkout",
  component: Checkout,
  meta: { requiresLogin: true }
}, 
{
  path: "/profile",
  name: "UserProfile",
  component: UserProfile,
  meta: { requiresLogin: true }
}, 
        {
          path: "/login",
          name: "Login",
          component: Login,
          meta: { requiresGuest: true },
          },
          {
            path: "/register",
            name: "Register",
            component: Register,
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