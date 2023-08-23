import axios from "axios";

const product = {
  namespaced: true,
  state: {
    productData: [],
    getSingleProduct: [],
  },

  getters: {
    getLatestProducts: (state) => state.productData,
    getProductBySlug: (state) => (productSlug) => {
      console.log("fetching single product by slug:", productSlug);
      console.log("ProductData:", state.getSingleProduct);
      const product = state.getSingleProduct;
      console.log("product:", product);
      return product;
    }
    // get filter product
    // getProductByCategory: (state) => (productCategory) => {
    //   const product = state.productData.filter(
    //     (p) => p.category == productCategory
    //   );
    //   return product
    // },
  },
  actions: {
    async fetchLatestProducts({ commit }) {
      try {
        const urlProduct = 'https://ecommerce.olipiskandar.com/api/v1/product/latest/11';
        const latestProductApi =  await axios.get(urlProduct);
        commit("SET_LATEST_PRODUCTS", latestProductApi.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    // get single product
    async fetchSingleProduct({ commit }, productSlug) {
      try {
        const urlSingleProduct = `https://ecommerce.olipiskandar.com/api/v1/product/details/${productSlug}`;
        const response = await axios.get(urlSingleProduct);
        commit("SET_SINGLE_PRODUCT", response.data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    // async fetchFilterProduct({ commit }, productCategory) {
    //   try {
    //     const response = await axios.get(
    //       `https://fakestoreapi.com/products/${productCategory}`
    //     );
    //     commit("SET_FILTER_PRODUCT", response.data);
    //   } catch (error) {
    //     alert(error);
    //     console.log(error);
    //   }
    // },
  },
  mutations: {
    SET_LATEST_PRODUCTS(state, latestProducts) {
      state.productData = latestProducts;
    },
    SET_SINGLE_PRODUCT(state, product) {
      state.getSingleProduct = product;
    },
    // SET_FILTER_PRODUCT(state, product) {
    //   state.filterProduct = product;
    // },  
  },
};

export default product;