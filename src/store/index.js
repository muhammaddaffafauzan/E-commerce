import { createStore } from "vuex";
import auth from "./modules/auth.js";
import product from "./modules/product.js";
import brands from "./modules/brands.js";
import category from "./modules/category.js"; 
const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    auth,
    product,
    brands,
    category,
  },
});

export default store;