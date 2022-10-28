import { fetchUserInfo, fetchCommentItem, fetchList } from "@/api";

export default {
  // network slow 3g 하면 spinner 오류
  async FETCH_USER({ commit }, name) {
    try {
      const response = fetchUserInfo(name);
      commit("SET_USER", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ITEM({ commit }, id) {
    try {
      const response = await fetchCommentItem(id);
      commit("SET_ITEM", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit("SET_LIST", response.data);
    return response;
  },
};
