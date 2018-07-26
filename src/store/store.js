import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new  Vuex.Store({
  state:{
    account:undefined
    /*count:0*/
  },
  mutations:{
    login(state,payload){
      state.account=payload
    },
    /*increment:state => state.count ++,
  decrement:state => state.count --,*/
    logout(state){
      state.account=undefined
    }
  },
  actions:{
    handleLogin(context,payload){
      context.commit('login',payload)
    },
    logout(context){
      context.commit('logout')
    }
  }
})
