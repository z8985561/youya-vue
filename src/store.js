import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customer_contact: "",
    router_active: 1,
    createOrderGoodsList: []
  },
  mutations: {
    setCreateOrderGoodsList(state, list) {
      state.createOrderGoodsList = list;
    },
    setContact(state, imgUrl) {
      state.customer_contact = imgUrl
    }
  },
  actions: {
    setCreateOrderGoodsList(state, list) {
      state.createOrderGoodsList = list;
    },
    setContact(context, imgUrl) {
      context.commit("setContact", imgUrl)
    }
  },
  getters: {
    getCreateOrderGoodsList(state) {
      return state.createOrderGoodsList;
    },
    getContact: state => {
      return state.customer_contact;
    }
  }
})
