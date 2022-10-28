import { fetchUserInfo, fetchCommentItem, fetchList } from "@/api";

export default {
  // network slow 3g 하면 spinner 오류
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then((response) => {
        commit("SET_USER", response.data);
        return response;
      })
      .catch((e) => console.log(e));
  },
  FETCH_ITEM({ commit }, id) {
    return fetchCommentItem(id)
      .then((response) => {
        commit("SET_ITEM", response.data);
        return response;
      })
      .catch((e) => console.log(e));
  },
  FETCH_LIST({ commit }, pageName) {
    //return을 꼭 써야 비동기 처리가 됨
    return fetchList(pageName)
      .then((response) => {
        commit("SET_LIST", response.data);
        //여기도 씀
        return response;
      })
      .catch((e) => console.log(e));
  },
};
