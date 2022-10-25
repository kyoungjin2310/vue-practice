import Vue from "vue";
import Vuex from "vuex";
import { fetchAskList, fetchJobsList, fetchNewsList } from "@/api";
import mutations from "./mutations";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
  },
  //getters - store에 computed 속성
  getters: {
    fetchAsk(state) {
      return state.ask;
    },
  },
  mutations,
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((response) => {
          console.log(response.data);
          //mutations에 넣는 방법 - context.commit(mutations type명, 값)
          context.commit("SET_NEWS", response.data);
        })
        .catch((e) => console.log(e));
    },
    FETCH_ASK(context) {
      fetchAskList()
        .then((response) => {
          console.log(response.data);
          context.commit("SET_ASK", response.data);
        })
        .catch((e) => console.log(e));
    },
    FETCH_JOBS(context) {
      fetchJobsList()
        .then((response) => {
          console.log(response.data);
          context.commit("SET_JOBS", response.data);
        })
        .catch((e) => console.log(e));
    },
  },
});
