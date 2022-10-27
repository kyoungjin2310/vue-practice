import { fetchUserInfo, fetchCommentItem, fetchList } from "@/api";

export default {
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
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit("SET_LIST", data))
      .catch((e) => console.log(e));
  },
};
