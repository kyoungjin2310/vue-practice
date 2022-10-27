import axios from "axios";

//공통
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

//하이오더 컴포넌트 api news ~ jobs
function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

//router params id값을 인자로 받아서 api요청
function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

//api item
function fetchCommentItem(username) {
  return axios.get(`${config.baseUrl}item/${username}.json`);
}

export { fetchUserInfo, fetchCommentItem, fetchList };
