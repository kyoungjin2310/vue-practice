import {
  fetchAskList,
  fetchJobsList,
  fetchNewsList,
  fetchUserInfo,
} from "@/api";

export default {
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
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        console.log(data);
        commit("SET_JOBS", data);
      })
      .catch((e) => console.log(e));
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        console.log(data);
        commit("SET_USER", data);
      })
      .catch((e) => console.log(e));
  },
};
