import {
  fetchAskList,
  fetchJobsList,
  fetchNewsList,
  fetchUserInfo,
  fetchCommentItem,
} from "@/api";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        context.commit("SET_NEWS", response.data);
        //data를 불러오고 나서 spnnier가 사라져야 되어서, Promise 객체 반환
        return response;
      })
      .catch((e) => console.log(e));
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then((response) => {
        context.commit("SET_ASK", response.data);
        return response;
      })
      .catch((e) => console.log(e));
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then((response) => {
        commit("SET_JOBS", response.data);
        return response;
      })
      .catch((e) => console.log(e));
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then((response) => {
        commit("SET_USER", response.data);
        return response;
      })
      .catch((e) => console.log(e));
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then((response) => {
        commit("SET_ITEM", response.data);
        return response;
      })
      .catch((e) => console.log(e));
  },
};
