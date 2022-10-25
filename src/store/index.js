import Vue from "vue";
import Vuex from "vuex";
import { fetchNewsList } from "@/api";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
  },
  mutations: {
    //mutations type명(state, api data 인자값)
    SET_NEWS(state, news) {
      state.news = news;
    },
  },
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
  },
});
