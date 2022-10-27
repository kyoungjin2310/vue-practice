import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: {},
  },
  //getters - store에 computed 속성
  getters: {
    fetchAsk(state) {
      return state.ask;
    },
    fetchItem(state) {
      return state.item;
    },
  },
  mutations,
  actions,
});
