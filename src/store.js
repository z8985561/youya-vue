import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customer_contact:"",
    router_active:1
  },
  mutations: {
    setContact(state,imgUrl){
      state.customer_contact = imgUrl
    }
  },
  actions: {
    setContact(context,imgUrl){
      context.commit("setContact",imgUrl)
    }
  },
  getters:{
    getContact: state =>{
      return state.customer_contact;
    }
  }
})
