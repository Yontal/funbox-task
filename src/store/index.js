import Vue from 'vue'
import Vuex from 'vuex'
import goods from '../data/dummydata'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods: goods
  },
  mutations: {
    mutateGoods: (state, payload) => {
      state.goods = payload;
    }
  },
  actions: {
    updateGood: ({commit, state}, payload) => {
      let updGoods = state.goods.map(good => {
        if(good.id !== payload.id){
          return good;
        } else {
          return payload;
        }
      })
      commit('mutateGoods', updGoods);
    }
  },
  getters: {
    getGoods: state => {
      return state.goods;
    }
  }
})
