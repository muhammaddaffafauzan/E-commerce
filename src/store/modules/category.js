import axios from "axios";

const category = {
  namespaced: true,
  state: {
    categoryData: [],
    
  },

  getters: {
    getAllCategory: (state) => state.categoryData,
   
  },
  actions: {
    async fetchAllCategory({ commit }) {
      try {
        const data = await axios.get("https://ecommerce.olipiskandar.com/api/v1/all-categories");
        commit("SET_ALL_CATEGORY", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

  },
  mutations: {
    SET_ALL_CATEGORY(state, category) {
      state.categoryData = category;
    },
  },
};

export default category;