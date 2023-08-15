import { createStore } from "vuex";
import auth from "./modules/auth.js";
import product from "./modules/product.js";
const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    auth,
    product
  },
});

export default store;