import axios from 'axios';

const order = {
  namespaced: true,
  state: {
    orderData: [],
    getAllDataOrder: [],
  },
  getters: {
    getOrder: (state) => state.orderData,
    getAllOrder: (state) => state.getAllDataOrder,
  },
  actions: {
    async fetchOrderData({ commit }, orderCode) {
      try {
        const urlOrder = `https://ecommerce.olipiskandar.com/api/v1/user/order/${orderCode}`;
        const responseOrder = await axios.get(urlOrder, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        commit('SET_ORDER', responseOrder.data['data']);
        console.log(responseOrder.data);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    },
    async fetchAllOrderData({ commit } ) {
      try {
        const urlOrder = "https://ecommerce.olipiskandar.com/api/v1/user/orders";
        const responseOrder = await axios.get(urlOrder, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        commit('SET_ALL_ORDER', responseOrder.data['data']);
        console.log(responseOrder.data);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    },
  },
  mutations: {
    SET_ORDER(state, order) {
      state.orderData = order;
    },
    SET_ALL_ORDER(state, order) {
      state.getAllDataOrder = order;
    },
  },
};

export default order;